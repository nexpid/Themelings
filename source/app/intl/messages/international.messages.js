// app/intl/messages/international.messages.js
module.exports = (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = global;
    options = mike.Object;
    report = options.defineProperty;
    tango = {};
    mike = true;
    tango['value'] = mike;
    mike = '__esModule';
    mike = report.bind(options)(zulu, mike, tango);
    verify = {};
    entity = function() { // Original name: en-US
        report = _closure1_slot0;
        oscar = _closure1_slot1;
        entity = 0;
        entity = oscar[entity];
        tango = undefined;
        zulu = report.bind(tango)(entity);
        mike = zulu.loadJsonAsset;
        entity = 1;
        entity = oscar[entity];
        entity = report.bind(tango)(entity);
        zulu = mike.bind(zulu)(entity);
        mike = zulu.then;
        entity = function(argFoo) {
            entity = {};
            mike = argFoo;
            entity['default'] = mike;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    verify['en-US'] = entity;
    tango = 2;
    mike = golf[tango];
    entity = undefined;
    options = oscar.bind(entity)(mike);
    report = options.createLoader;
    mike = 'en-US';
    mike = report.bind(options)(verify, mike);
    tango = golf[tango];
    report = oscar.bind(entity)(tango);
    tango = report.makeMessagesProxy;
    tango = tango.bind(report)(mike);
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'intl/messages/international.messages.js';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['messagesLoader'] = mike;
    return entity;
})();