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
        _fun77624: for(var _fun77624_ip = 0; ; ) switch(_fun77624_ip) {
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
            if(!(entity != report)) { _fun77624_ip = 235; continue _fun77624 }
 133:
            options = entity == report;
            oscar = undefined;
            if(options) { _fun77624_ip = 152; continue _fun77624 }
 142:
            options = report.getBadges;
            oscar = options.bind(report)();
 152:
            if(!(entity == oscar)) { _fun77624_ip = 160; continue _fun77624 }
 156:
            oscar = new Array(0);
 160:
            entity = entity != golf;
            if(!entity) { _fun77624_ip = 181; continue _fun77624 }
 167:
            golf = golf.id;
            report = report.userId;
            entity = golf === report;
 181:
            if(!entity) { _fun77624_ip = 187; continue _fun77624 }
 184:
            entity = tango;
 187:
            tango = oscar;
            if(!entity) { _fun77624_ip = 210; continue _fun77624 }
 193:
            report = oscar.filter;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = 'legacy_username';
                entity = mike !== entity;
                return entity;
            };
            tango = report.bind(oscar)(entity);
 210:
            entity = tango;
            if(!zulu) { _fun77624_ip = 233; continue _fun77624 }
 216:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun77628: for(var _fun77628_ip = 0; ; ) switch(_fun77628_ip) {
 0:
                    mike = argFoo;
                    entity = {};
                    offset = entity;
                    verify = mike;
                    zulu = copyDataProperties(offset, verify);
                    tango = mike.id;
                    zulu = 'legacy_username';
                    if(!(tango !== zulu)) { _fun77628_ip = 37; continue _fun77628 }
 30:
                    zulu = mike.description;
                    _fun77628_ip = 97; continue _fun77628;
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
 97:
                    mike = 'description';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 233:
            return entity;
 235:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['default'] = mike;
    mike = 'quest_completed';
    zulu['QUEST_COMPLETED_BADGE'] = mike;
    return entity;
})();