// app/modules/oauth2/native/authorizeCallback.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.OAUTH2_SUCCESS_RESULT_MODAL_KEY;
    var _closure1_slot3 = golf;
    tango = tango.OAUTH2_ERROR_RESULT_MODAL_KEY;
    var _closure1_slot4 = tango;
    tango = /oauth2\\/authorized/;
    var _closure1_slot5 = tango;
    tango = /oauth2\\/error/;
    var _closure1_slot6 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/oauth2/native/authorizeCallback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: authorizeCallback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            report = mike.location;
            entity = mike.canceled;
            golf = mike.application;
            oscar = mike.guild;
            options = mike.wasDeepLink;
            yankee = null;
            if(!(yankee == report)) { _fun00002_ip = 123; continue _fun00001 }
 36:
            if(entity) { _fun00002_ip = 396; continue _fun00001 }
 42:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 1;
            zulu = mike[zulu];
            verify = undefined;
            tango = tango.bind(verify)(zulu);
            zulu = tango.pushLazy;
            romeo = _closure1_slot0;
            offset = 3;
            offset = mike[offset];
            romeo = romeo.bind(verify)(offset);
            offset = 2;
            offset = mike[offset];
            mike = mike.paths;
            mike = romeo.bind(verify)(offset, mike);
            entity = _closure1_slot4;
            entity = zulu.bind(tango)(mike, verify, entity);
            _fun00002_ip = 396; continue _fun00001;
 123:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            romeo = 4;
            mike = mike[romeo];
            verify = undefined;
            zulu = zulu.bind(verify)(mike);
            mike = zulu.toURLSafe;
            mike = mike.bind(zulu)(report);
            if(!(yankee == mike)) { _fun00002_ip = 165; continue _fun00001 }
 163:
            mike = {};
 165:
            offset = mike.host;
            tango = mike.pathname;
            backup = mike.searchParams;
            if(!(yankee != offset)) { _fun00002_ip = 266; continue _fun00001 }
 187:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            mike = mike[romeo];
            zulu = zulu.bind(verify)(mike);
            mike = zulu.isDiscordHostname;
            mike = mike.bind(zulu)(offset);
            if(!mike) { _fun00002_ip = 266; continue _fun00001 }
 218:
            if(!(yankee != tango)) { _fun00002_ip = 266; continue _fun00001 }
 222:
            zulu = tango.match;
            mike = _closure1_slot5;
            mike = zulu.bind(tango)(mike);
            if(!(yankee == mike)) { _fun00002_ip = 570; continue _fun00001 }
 244:
            zulu = tango.match;
            mike = _closure1_slot6;
            mike = zulu.bind(tango)(mike);
            if(!(yankee == mike)) { _fun00002_ip = 400; continue _fun00001 }
 266:
            if(!options) { _fun00002_ip = 327; continue _fun00001 }
 269:
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 6;
            mike = offset[mike];
            zulu = tango.bind(verify)(mike);
            mike = zulu.getBrowserManagerSelectedBrowser;
            zulu = mike.bind(zulu)();
            mike = 7;
            mike = offset[mike];
            mike = tango.bind(verify)(mike);
            mike = mike.WebBrowserType;
            mike = mike.IN_APP;
            options = zulu === mike;
 327:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            tango = zulu.bind(verify)(mike);
            zulu = tango.openURL;
            mike = undefined;
            if(!options) { _fun00002_ip = 390; continue _fun00001 }
 358:
            offset = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 7;
            options = romeo[options];
            options = offset.bind(verify)(options);
            options = options.WebBrowserType;
            mike = options.SAFARI;
 390:
            mike = zulu.bind(tango)(report, mike);
 396:
            mike = undefined;
            return mike;
 400:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 1;
            zulu = mike[zulu];
            options = tango.bind(verify)(zulu);
            report = options.pushLazy;
            tango = _closure1_slot0;
            zulu = 3;
            zulu = mike[zulu];
            tango = tango.bind(verify)(zulu);
            zulu = 2;
            zulu = mike[zulu];
            mike = mike.paths;
            tango = tango.bind(verify)(zulu, mike);
            zulu = {};
            offset = yankee == backup;
            mike = undefined;
            if(offset) { _fun00002_ip = 503; continue _fun00001 }
 471:
            romeo = backup.get;
            offset = 'error_description';
            romeo = romeo.bind(backup)(offset);
            offset = yankee == romeo;
            mike = undefined;
            if(offset) { _fun00002_ip = 503; continue _fun00001 }
 494:
            offset = romeo.toString;
            mike = offset.bind(romeo)();
 503:
            if(!(yankee == mike)) { _fun00002_ip = 551; continue _fun00001 }
 507:
            romeo = yankee == backup;
            offset = undefined;
            if(romeo) { _fun00002_ip = 548; continue _fun00001 }
 516:
            foxtrot = backup.get;
            romeo = 'error';
            romeo = foxtrot.bind(backup)(romeo);
            yankee = yankee == romeo;
            offset = undefined;
            if(yankee) { _fun00002_ip = 548; continue _fun00001 }
 539:
            yankee = romeo.toString;
            offset = yankee.bind(romeo)();
 548:
            mike = offset;
 551:
            zulu['error'] = mike;
            mike = _closure1_slot4;
            mike = report.bind(options)(tango, zulu, mike);
            mike = undefined;
            return mike;
 570:
            tango = _closure1_slot1;
            mike = _closure1_slot2;
            zulu = 1;
            zulu = mike[zulu];
            report = tango.bind(verify)(zulu);
            tango = report.pushLazy;
            options = _closure1_slot0;
            zulu = 3;
            zulu = mike[zulu];
            options = options.bind(verify)(zulu);
            zulu = 5;
            zulu = mike[zulu];
            mike = mike.paths;
            zulu = options.bind(verify)(zulu, mike);
            mike = {};
            mike['application'] = golf;
            mike['guild'] = oscar;
            entity = _closure1_slot3;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = undefined;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();