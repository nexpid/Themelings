// app/modules/media_panel/native/MediaPlaybackPanelContainer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = golf.memo;
    mike = function() { // Original name: MediaPlaybackPanelContainer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 2;
            entity = tango[entity];
            report = undefined;
            tango = zulu.bind(report)(entity);
            zulu = tango.useMediaPlayerManagerStore;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    entity = mike.showPip;
                    zulu = !entity;
                    if(zulu) { _fun00004_ip = 24; continue _fun00003 }
 15:
                    entity = mike.canAccessMedia;
                    zulu = !entity;
 24:
                    if(zulu) { _fun00004_ip = 39; continue _fun00003 }
 27:
                    tango = mike.activeMediaPlayerSource;
                    entity = null;
                    zulu = entity == tango;
 39:
                    entity = !zulu;
                    if(zulu) { _fun00004_ip = 188; continue _fun00003 }
 48:
                    options = mike.mediaSourceMessage;
                    mike = mike.activeMediaPlayerSource;
                    zulu = null;
                    tango = zulu == mike;
                    golf = undefined;
                    if(tango) { _fun00004_ip = 77; continue _fun00003 }
 71:
                    golf = mike.attachmentIndex;
 77:
                    tango = zulu == options;
                    mike = false;
                    if(tango) { _fun00004_ip = 185; continue _fun00003 }
 86:
                    tango = zulu == golf;
                    mike = false;
                    if(tango) { _fun00004_ip = 185; continue _fun00003 }
 95:
                    tango = zulu == options;
                    report = undefined;
                    if(tango) { _fun00004_ip = 133; continue _fun00003 }
 104:
                    tango = options.getContentMessage;
                    tango = tango.bind(options)();
                    options = zulu == tango;
                    report = undefined;
                    if(options) { _fun00004_ip = 133; continue _fun00003 }
 123:
                    tango = tango.attachments;
                    report = tango[golf];
 133:
                    golf = zulu == report;
                    tango = undefined;
                    if(golf) { _fun00004_ip = 172; continue _fun00003 }
 142:
                    golf = report.content_type;
                    report = zulu == golf;
                    tango = undefined;
                    if(report) { _fun00004_ip = 172; continue _fun00003 }
 157:
                    oscar = golf.startsWith;
                    report = 'audio';
                    tango = oscar.bind(golf)(report);
 172:
                    zulu = zulu != tango;
                    if(!zulu) { _fun00004_ip = 182; continue _fun00003 }
 179:
                    zulu = tango;
 182:
                    mike = zulu;
 185:
                    entity = mike;
 188:
                    return entity;
                }
            };
            zulu = zulu.bind(tango)(entity);
            entity = null;
            if(!zulu) { _fun00002_ip = 106; continue _fun00001 }
 50:
            tango = _closure1_slot3;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            zulu = golf.bind(report)(mike);
            mike = {};
            oscar = 4;
            oscar = options[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 106:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_panel/native/MediaPlaybackPanelContainer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();