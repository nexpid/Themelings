// app/modules/hub/useIsHubRealNamePromptShowing.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildPrompts;
    var _closure1_slot9 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hub/useIsHubRealNamePromptShowing.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useIsHubRealNamePromptShowing
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 7;
        tango = tango[mike];
        mike = undefined;
        golf = report.bind(mike)(tango);
        report = golf.useStateFromStores;
        mike = _closure1_slot6;
        tango = new Array(4);
        tango[0] = mike;
        mike = _closure1_slot4;
        tango[1] = mike;
        mike = _closure1_slot7;
        tango[2] = mike;
        mike = _closure1_slot5;
        tango[3] = mike;
        mike = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot6;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                oscar = entity == zulu;
                report = undefined;
                if(oscar) { _fun00002_ip = 56; continue _fun00001 }
 35:
                golf = zulu.hasFeature;
                oscar = _closure1_slot8;
                oscar = oscar.HUB;
                report = golf.bind(zulu)(oscar);
 56:
                oscar = true;
                if(!(oscar === report)) { _fun00002_ip = 176; continue _fun00001 }
 62:
                verify = _closure1_slot4;
                options = verify.hasViewedPrompt;
                report = _closure1_slot9;
                golf = report.REAL_NAME_PROMPT;
                report = zulu.id;
                report = options.bind(verify)(golf, report);
                if(!(oscar !== report)) { _fun00002_ip = 174; continue _fun00001 }
 99:
                oscar = _closure1_slot7;
                report = oscar.getCurrentUser;
                golf = report.bind(oscar)();
                if(!(entity != golf)) { _fun00002_ip = 172; continue _fun00001 }
 116:
                oscar = _closure1_slot5;
                report = oscar.getMember;
                tango = zulu.id;
                options = entity == golf;
                zulu = undefined;
                if(options) { _fun00002_ip = 145; continue _fun00001 }
 140:
                zulu = golf.id;
 145:
                zulu = report.bind(oscar)(tango, zulu);
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00002_ip = 166; continue _fun00001 }
 160:
                mike = zulu.nick;
 166:
                mike = entity == mike;
                return mike;
 172:
                return entity;
 174:
                return entity;
 176:
                return entity;
            }
        };
        mike = report.bind(golf)(tango, mike);
        var _closure2_slot1 = mike;
        report = _closure1_slot3;
        tango = report.useEffect;
        zulu = new Array(2);
        zulu[0] = mike;
        zulu[1] = oscar;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = _closure2_slot0;
                tango = null;
                mike = tango != mike;
                if(!mike) { _fun00004_ip = 24; continue _fun00003 }
 16:
                zulu = _closure2_slot1;
                mike = tango != zulu;
 24:
                if(!mike) { _fun00004_ip = 85; continue _fun00003 }
 27:
                mike = _closure2_slot1;
                if(mike) { _fun00004_ip = 85; continue _fun00003 }
 34:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 8;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.viewPrompt;
                mike = _closure1_slot9;
                mike = mike.REAL_NAME_PROMPT;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
 85:
                entity = undefined;
                return entity;
            }
        };
        entity = tango.bind(report)(entity, zulu);
        entity = true;
        entity = entity === mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();