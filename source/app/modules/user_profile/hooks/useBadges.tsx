// app/modules/user_profile/hooks/useBadges.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/hooks/useBadges.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useBadges
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 2;
            zulu = verify[zulu];
            oscar = undefined;
            zulu = options.bind(oscar)(zulu);
            tango = zulu.LegacyUsernameDisabled;
            zulu = tango.useSetting;
            tango = zulu.bind(tango)();
            zulu = 3;
            golf = verify[zulu];
            romeo = options.bind(oscar)(golf);
            yankee = romeo.useStateFromStores;
            golf = _closure1_slot3;
            offset = new Array(1);
            offset[0] = golf;
            golf = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = yankee.bind(romeo)(offset, golf);
            zulu = verify[zulu];
            verify = options.bind(oscar)(zulu);
            options = verify.useStateFromStores;
            entity = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                entity = _closure1_slot2;
                entity = entity.hidePersonalInformation;
                return entity;
            };
            zulu = options.bind(verify)(zulu, entity);
            entity = null;
            if(!(entity != report)) { _fun00002_ip = 227; continue _fun00001 }
 129:
            options = entity == report;
            oscar = undefined;
            if(options) { _fun00002_ip = 148; continue _fun00001 }
 138:
            options = report.getBadges;
            oscar = options.bind(report)();
 148:
            if(!(entity == oscar)) { _fun00002_ip = 156; continue _fun00001 }
 152:
            oscar = new Array(0);
 156:
            entity = entity != golf;
            if(!entity) { _fun00002_ip = 177; continue _fun00001 }
 163:
            golf = golf.id;
            report = report.userId;
            entity = golf === report;
 177:
            if(!entity) { _fun00002_ip = 183; continue _fun00001 }
 180:
            entity = tango;
 183:
            tango = oscar;
            if(!entity) { _fun00002_ip = 204; continue _fun00001 }
 189:
            report = oscar.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = 'legacy_username';
                entity = mike !== entity;
                return entity;
            };
            tango = report.bind(oscar)(entity);
 204:
            entity = tango;
            if(!zulu) { _fun00002_ip = 225; continue _fun00001 }
 210:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = argFoo;
                    entity = {};
                    offset = entity;
                    verify = mike;
                    zulu = copyDataProperties(offset, verify);
                    tango = mike.id;
                    zulu = 'legacy_username';
                    if(!(tango !== zulu)) { _fun00004_ip = 37; continue _fun00003 }
 30:
                    zulu = mike.description;
                    _fun00004_ip = 99; continue _fun00003;
 37:
                    golf = _closure1_slot0;
                    options = _closure1_slot1;
                    mike = 4;
                    tango = options[mike];
                    oscar = undefined;
                    tango = golf.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.string;
                    mike = options[mike];
                    mike = golf.bind(oscar)(mike);
                    mike = mike.t;
                    mike = mike.Br1ls7;
                    zulu = tango.bind(report)(mike);
 99:
                    mike = 'description';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 225:
            return entity;
 227:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['default'] = mike;
    mike = 'quest_completed';
    zulu['QUEST_COMPLETED_BADGE'] = mike;
    return entity;
})();