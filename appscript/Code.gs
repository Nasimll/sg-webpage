// Google Apps Script — Sadykov Group vacancy API
// Deploy as Web App: Execute as "Me", Who has access "Anyone"
// Sheet name: "Vacancies"
// Drive folder name: "sg-vacancy-images" (images named by title_ru, any extension)

var SHEET_NAME   = 'Vacancies';
var FOLDER_NAME  = 'sg-vacancy-images';

function doGet(e) {
  try {
    var sheet   = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var data    = sheet.getDataRange().getValues();
    var headers = data[0].map(function(h) { return h.toString().trim(); });
    var imageMap = buildImageMap();

    var vacancies = [];
    for (var i = 1; i < data.length; i++) {
      var row = {};
      headers.forEach(function(h, j) { row[h] = data[i][j]; });
      if (!row['id']) continue;

      row['available'] = (row['available'] === true || String(row['available']).toUpperCase() === 'TRUE');
      row['imageUrl']  = imageMap[String(row['title_ru'] || '').trim()] || '';

      vacancies.push(row);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ vacancies: vacancies }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Build a map of filename-without-extension → thumbnail URL
function buildImageMap() {
  var map     = {};
  var folders = DriveApp.getFoldersByName(FOLDER_NAME);
  if (!folders.hasNext()) return map;

  var folder = folders.next();
  var files  = folder.getFiles();

  while (files.hasNext()) {
    var file = files.next();
    var name = file.getName().replace(/\.[^/.]+$/, ''); // strip extension
    try { file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW); } catch(e) {}
    map[name] = 'https://drive.google.com/thumbnail?id=' + file.getId() + '&sz=w800';
  }

  return map;
}
