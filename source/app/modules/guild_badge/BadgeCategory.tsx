// app/modules/guild_badge/BadgeCategory.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    tango = {};
    golf = 0;
    tango['PARTNERED'] = golf;
    entity = 'PARTNERED';
    tango[golf] = entity;
    entity = 1;
    tango['VERIFIED'] = entity;
    golf = 'VERIFIED';
    tango[entity] = golf;
    options = 2;
    tango['VERIFIED_AND_PARTNERED'] = options;
    golf = 'VERIFIED_AND_PARTNERED';
    tango[options] = golf;
    options = 3;
    tango['COMMUNITY'] = options;
    golf = 'COMMUNITY';
    tango[options] = golf;
    options = 4;
    tango['DISCOVERABLE'] = options;
    golf = 'DISCOVERABLE';
    tango[options] = golf;
    options = 5;
    tango['STAFF'] = options;
    golf = 'STAFF';
    tango[options] = golf;
    options = 6;
    tango['CLAN'] = options;
    golf = 'CLAN';
    tango[options] = golf;
    options = 7;
    tango['NONE'] = options;
    golf = 'NONE';
    tango[options] = golf;
    var _closure1_slot2 = tango;
    report = report[entity];
    entity = undefined;
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_badge/BadgeCategory.tsx';
    report = oscar.bind(golf)(report);
    zulu['BadgeCategory'] = tango;
    mike = function(argFoo) { // Original name: getBadgeCategory
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            mike = entity.staff;
            if(mike) { _fun00002_ip = 222; continue _fun00001 }
 15:
            mike = entity.verified;
            if(!mike) { _fun00002_ip = 36; continue _fun00001 }
 24:
            mike = entity.partnered;
            if(mike) { _fun00002_ip = 207; continue _fun00001 }
 36:
            mike = entity.verified;
            if(mike) { _fun00002_ip = 192; continue _fun00001 }
 48:
            mike = entity.partnered;
            if(mike) { _fun00002_ip = 177; continue _fun00001 }
 57:
            mike = entity.community;
            if(!mike) { _fun00002_ip = 112; continue _fun00001 }
 66:
            tango = entity.visibility;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 0;
            report = report[zulu];
            zulu = undefined;
            zulu = oscar.bind(zulu)(report);
            zulu = zulu.GuildVisibility;
            zulu = zulu.PUBLIC;
            if(!(tango !== zulu)) { _fun00002_ip = 165; continue _fun00001 }
 112:
            tango = entity.clan;
            if(tango) { _fun00002_ip = 153; continue _fun00001 }
 124:
            entity = entity.community;
            tango = _closure1_slot2;
            if(entity) { _fun00002_ip = 145; continue _fun00001 }
 137:
            entity = tango.NONE;
            _fun00002_ip = 151; continue _fun00001;
 145:
            entity = tango.COMMUNITY;
 151:
            _fun00002_ip = 163; continue _fun00001;
 153:
            zulu = _closure1_slot2;
            entity = zulu.CLAN;
 163:
            _fun00002_ip = 175; continue _fun00001;
 165:
            mike = _closure1_slot2;
            entity = mike.DISCOVERABLE;
 175:
            _fun00002_ip = 190; continue _fun00001;
 177:
            mike = _closure1_slot2;
            entity = mike.PARTNERED;
 190:
            _fun00002_ip = 205; continue _fun00001;
 192:
            mike = _closure1_slot2;
            entity = mike.VERIFIED;
 205:
            _fun00002_ip = 220; continue _fun00001;
 207:
            mike = _closure1_slot2;
            entity = mike.VERIFIED_AND_PARTNERED;
 220:
            _fun00002_ip = 235; continue _fun00001;
 222:
            mike = _closure1_slot2;
            entity = mike.STAFF;
 235:
            return entity;
        }
    };
    zulu['getBadgeCategory'] = mike;
    return entity;
})();