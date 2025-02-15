// app/uikit-native/GuildBadge.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: GuildBadge
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            golf = oscar.guild;
            tango = oscar.monocolored;
            report = undefined;
            if(!(tango === report)) { _fun00002_ip = 22; continue _fun00001 }
 20:
            tango = false;
 22:
            options = oscar.size;
            if(!(options === report)) { _fun00002_ip = 50; continue _fun00001 }
 31:
            entity = _closure1_slot9;
            entity = entity.Sizes;
            options = entity.MEDIUM;
 50:
            zulu = {'guild': 0, 'monocolored': 0, 'size': 0};
            entity = null;
            romeo = zulu;
            yankee = null;
            mike = silentSetPrototypeOf(romeo, yankee);
            romeo = {};
            yankee = oscar;
            offset = zulu;
            oscar = copyDataProperties(romeo, yankee, offset);
            zulu = _closure1_slot8;
            golf = zulu.bind(report)(golf, tango);
            zulu = entity == golf;
            if(zulu) { _fun00002_ip = 163; continue _fun00001 }
 103:
            tango = _closure1_slot4;
            zulu = _closure1_slot0;
            verify = _closure1_slot1;
            mike = 8;
            mike = verify[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            romeo = mike;
            yankee = oscar;
            oscar = copyDataProperties(romeo, yankee);
            oscar = 'size';
            mike[oscar] = options;
            oscar = 'source';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 163:
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    foxtrot = 0;
    verify = golf[foxtrot];
    mike = argCorge;
    entity = undefined;
    mike = mike.bind(entity)(verify);
    romeo = 1;
    mike = golf[romeo];
    mike = options.bind(entity)(mike);
    var _closure1_slot2 = mike;
    yankee = 2;
    mike = golf[yankee];
    mike = oscar.bind(entity)(mike);
    mike = mike.GuildFeatures;
    var _closure1_slot3 = mike;
    offset = 3;
    mike = golf[offset];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot4 = mike;
    verify = {};
    verify['PARTNERED'] = foxtrot;
    mike = 'PARTNERED';
    verify[foxtrot] = mike;
    verify['VERIFIED'] = romeo;
    mike = 'VERIFIED';
    verify[romeo] = mike;
    verify['PARTNERED_BLACK'] = yankee;
    mike = 'PARTNERED_BLACK';
    verify[yankee] = mike;
    verify['VERIFIED_BLACK'] = offset;
    mike = 'VERIFIED_BLACK';
    verify[offset] = mike;
    offset = 4;
    verify['NONE'] = offset;
    mike = 'NONE';
    verify[offset] = mike;
    var _closure1_slot5 = verify;
    mike = {};
    yankee = verify.VERIFIED;
    offset = golf[offset];
    offset = options.bind(entity)(offset);
    mike[yankee] = offset;
    yankee = verify.PARTNERED;
    offset = 5;
    offset = golf[offset];
    offset = options.bind(entity)(offset);
    mike[yankee] = offset;
    yankee = verify.VERIFIED_BLACK;
    offset = 6;
    offset = golf[offset];
    offset = options.bind(entity)(offset);
    mike[yankee] = offset;
    yankee = verify.PARTNERED_BLACK;
    offset = 7;
    offset = golf[offset];
    offset = options.bind(entity)(offset);
    mike[yankee] = offset;
    offset = verify.NONE;
    verify = null;
    mike[offset] = verify;
    var _closure1_slot6 = mike;
    mike = function(argFoo, argBar) { // Original name: checkGuildForFeature
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tango = argBar;
            mike = null;
            entity = mike != report;
            if(!entity) { _fun00004_ip = 128; continue _fun00003 }
 15:
            zulu = _closure1_slot2;
            zulu = report instanceof zulu;
            if(zulu) { _fun00004_ip = 114; continue _fun00003 }
 29:
            zulu = global;
            options = zulu.Array;
            golf = options.isArray;
            oscar = report.features;
            oscar = golf.bind(options)(oscar);
            if(oscar) { _fun00004_ip = 96; continue _fun00003 }
 56:
            oscar = zulu.Boolean;
            options = report.features;
            golf = mike == options;
            zulu = undefined;
            mike = undefined;
            if(golf) { _fun00004_ip = 89; continue _fun00003 }
 79:
            golf = options.has;
            mike = golf.bind(options)(tango);
 89:
            mike = oscar.bind(zulu)(mike);
            _fun00004_ip = 112; continue _fun00003;
 96:
            oscar = report.features;
            zulu = oscar.includes;
            mike = zulu.bind(oscar)(tango);
 112:
            _fun00004_ip = 125; continue _fun00003;
 114:
            zulu = report.hasFeature;
            mike = zulu.bind(report)(tango);
 125:
            entity = mike;
 128:
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    mike = function(argFoo, argBar) { // Original name: getGuildBadgeSource
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            golf = argFoo;
            zulu = argBar;
            mike = _closure1_slot5;
            mike = mike.NONE;
            report = _closure1_slot7;
            tango = _closure1_slot3;
            tango = tango.VERIFIED;
            oscar = undefined;
            tango = report.bind(oscar)(golf, tango);
            if(tango) { _fun00006_ip = 93; continue _fun00005 }
 44:
            report = _closure1_slot7;
            tango = _closure1_slot3;
            tango = tango.PARTNERED;
            tango = report.bind(oscar)(golf, tango);
            if(!tango) { _fun00006_ip = 117; continue _fun00005 }
 67:
            report = _closure1_slot5;
            if(zulu) { _fun00006_ip = 82; continue _fun00005 }
 74:
            tango = report.PARTNERED;
            _fun00006_ip = 88; continue _fun00005;
 82:
            tango = report.PARTNERED_BLACK;
 88:
            mike = tango;
            _fun00006_ip = 117; continue _fun00005;
 93:
            tango = _closure1_slot5;
            if(zulu) { _fun00006_ip = 108; continue _fun00005 }
 100:
            zulu = tango.VERIFIED;
            _fun00006_ip = 114; continue _fun00005;
 108:
            zulu = tango.VERIFIED_BLACK;
 114:
            mike = zulu;
 117:
            entity = _closure1_slot6;
            entity = entity[mike];
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    report = 8;
    report = golf[report];
    report = options.bind(entity)(report);
    report = report.Sizes;
    tango['Sizes'] = report;
    report = 9;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/GuildBadge.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['getGuildBadgeSource'] = mike;
    return entity;
})();