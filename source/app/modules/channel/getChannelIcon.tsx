// app/modules/channel/getChannelIcon.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelTypes;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/getChannelIcon.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getChannelIconURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            oscar = arguments[1];
            report = undefined;
            if(!(oscar === report)) { _fun00002_ip = 15; continue _fun00001 }
 12:
            oscar = 32;
 15:
            tango = mike.type;
            zulu = _closure1_slot5;
            zulu = zulu.DM;
            if(!(zulu !== tango)) { _fun00002_ip = 124; continue _fun00001 }
 37:
            zulu = _closure1_slot5;
            zulu = zulu.GROUP_DM;
            if(!(zulu !== tango)) { _fun00002_ip = 53; continue _fun00001 }
 51:
            return report;
 53:
            tango = _closure1_slot1;
            golf = _closure1_slot2;
            zulu = 4;
            zulu = golf[zulu];
            golf = tango.bind(report)(zulu);
            tango = golf.getChannelIconURL;
            zulu = {};
            options = mike.id;
            zulu['id'] = options;
            options = mike.icon;
            zulu['icon'] = options;
            options = mike.getApplicationId;
            options = options.bind(mike)();
            zulu['applicationId'] = options;
            zulu['size'] = oscar;
            zulu = tango.bind(golf)(zulu);
            return zulu;
 124:
            tango = mike.recipients;
            zulu = tango.map;
            mike = _closure1_slot4;
            mike = mike.getUser;
            tango = zulu.bind(tango)(mike);
            zulu = tango.filter;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 3;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.isNotNullish;
            zulu = zulu.bind(tango)(mike);
            mike = _closure1_slot3;
            entity = 1;
            mike = mike.bind(report)(zulu, entity);
            entity = 0;
            tango = mike[entity];
            entity = null;
            mike = entity == tango;
            if(mike) { _fun00002_ip = 230; continue _fun00001 }
 214:
            zulu = tango.getAvatarURL;
            mike = arguments[2];
            entity = zulu.bind(tango)(report, oscar, mike);
 230:
            return entity;
        }
    };
    zulu['getChannelIconURL'] = tango;
    mike = function(argFoo) { // Original name: getChannelIconSource
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            tango = mike.type;
            zulu = _closure1_slot5;
            zulu = zulu.DM;
            if(!(zulu !== tango)) { _fun00004_ip = 119; continue _fun00003 }
 25:
            zulu = _closure1_slot5;
            zulu = zulu.GROUP_DM;
            if(!(zulu !== tango)) { _fun00004_ip = 43; continue _fun00003 }
 39:
            zulu = undefined;
            return zulu;
 43:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 4;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.getChannelIconSource;
            zulu = {};
            oscar = mike.id;
            zulu['id'] = oscar;
            oscar = mike.icon;
            zulu['icon'] = oscar;
            oscar = mike.getApplicationId;
            oscar = oscar.bind(mike)();
            zulu['applicationId'] = oscar;
            oscar = 128;
            zulu['size'] = oscar;
            zulu = tango.bind(report)(zulu);
            return zulu;
 119:
            tango = mike.recipients;
            zulu = tango.map;
            mike = _closure1_slot4;
            mike = mike.getUser;
            report = zulu.bind(tango)(mike);
            zulu = report.filter;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = undefined;
            mike = oscar.bind(tango)(mike);
            mike = mike.isNotNullish;
            zulu = zulu.bind(report)(mike);
            mike = _closure1_slot3;
            entity = 1;
            mike = mike.bind(tango)(zulu, entity);
            entity = 0;
            zulu = mike[entity];
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun00004_ip = 222; continue _fun00003 }
 211:
            mike = zulu.getAvatarSource;
            entity = mike.bind(zulu)(tango);
 222:
            return entity;
        }
    };
    zulu['getChannelIconSource'] = mike;
    return entity;
})();