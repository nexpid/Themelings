// app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: compareVersions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.split;
            tango = '.';
            report = entity.bind(mike)(tango);
            zulu = report.map;
            entity = global;
            mike = entity.Number;
            oscar = zulu.bind(report)(mike);
            zulu = '13.2';
            mike = zulu.split;
            tango = mike.bind(zulu)(tango);
            zulu = tango.map;
            mike = entity.Number;
            report = zulu.bind(tango)(mike);
            tango = entity.Math;
            zulu = tango.max;
            mike = oscar.length;
            entity = report.length;
            tango = zulu.bind(tango)(mike, entity);
            entity = 0;
            golf = entity < tango;
            zulu = null;
            mike = 0;
            if(!golf) { _fun00002_ip = 154; continue _fun00001 }
 107:
            golf = oscar[mike];
            verify = zulu != golf;
            options = 0;
            if(!verify) { _fun00002_ip = 123; continue _fun00001 }
 120:
            options = golf;
 123:
            verify = report[mike];
            offset = zulu != verify;
            golf = 0;
            if(!offset) { _fun00002_ip = 139; continue _fun00001 }
 136:
            golf = verify;
 139:
            if(!(!(options < golf))) { _fun00002_ip = 161; continue _fun00001 }
 143:
            if(!(!(options > golf))) { _fun00002_ip = 156; continue _fun00001 }
 147:
            mike = mike + 1;
            if(mike < tango) { _fun00002_ip = 107; continue _fun00001 }
 154:
            return entity;
 156:
            entity = 1;
            return entity;
 161:
            entity = -1;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argBaz;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.GuildFeatures;
    golf = tango.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
    tango = new Array(1);
    tango[0] = golf;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: canUseRoleSubscriptionIAP
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            entity = 3;
            entity = report[entity];
            golf = undefined;
            tango = tango.bind(golf)(entity);
            entity = tango.isIOS;
            entity = entity.bind(tango)();
            if(entity) { _fun00004_ip = 44; continue _fun00003 }
 40:
            entity = false;
            return entity;
 44:
            tango = _closure1_slot0;
            report = _closure1_slot1;
            entity = 4;
            entity = report[entity];
            tango = tango.bind(golf)(entity);
            entity = tango.getSystemVersion;
            oscar = entity.bind(tango)();
            tango = null;
            if(!(tango != oscar)) { _fun00004_ip = 162; continue _fun00003 }
 80:
            report = _closure1_slot5;
            entity = '13.2';
            report = report.bind(golf)(oscar, entity);
            entity = -1;
            if(!(entity !== report)) { _fun00004_ip = 162; continue _fun00003 }
 106:
            oscar = _closure1_slot3;
            report = oscar.getGuild;
            entity = argFoo;
            entity = report.bind(oscar)(entity);
            var _closure2_slot0 = entity;
            entity = tango != entity;
            if(!entity) { _fun00004_ip = 160; continue _fun00003 }
 134:
            tango = _closure1_slot4;
            zulu = tango.every;
            mike = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.hasFeature;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            entity = !mike;
 160:
            return entity;
 162:
            entity = false;
            return entity;
        }
    };
    zulu['canUseRoleSubscriptionIAP'] = tango;
    mike = function(argFoo) { // Original name: useCanUseRoleSubscriptionIAP
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golf = _closure1_slot2;
            report = golf.useMemo;
            mike = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 4;
                    entity = tango[entity];
                    report = undefined;
                    zulu = zulu.bind(report)(entity);
                    entity = zulu.getSystemVersion;
                    tango = entity.bind(zulu)();
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 44:
                    zulu = _closure1_slot5;
                    mike = '13.2';
                    zulu = zulu.bind(report)(tango, mike);
                    mike = 0;
                    entity = zulu >= mike;
 66:
                    return entity;
                }
            };
            entity = new Array(0);
            mike = report.bind(golf)(mike, entity);
            oscar = golf.useMemo;
            report = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 3;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.isIOS;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = new Array(0);
            entity = oscar.bind(golf)(report, entity);
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            report = 5;
            oscar = oscar[report];
            report = undefined;
            oscar = golf.bind(report)(oscar);
            report = oscar.useStateFromStores;
            golf = _closure1_slot3;
            tango = new Array(1);
            tango[0] = golf;
            zulu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = _closure1_slot3;
                    tango = report.getGuild;
                    entity = _closure2_slot0;
                    tango = tango.bind(report)(entity);
                    var _closure3_slot0 = tango;
                    entity = null;
                    entity = entity != tango;
                    if(!entity) { _fun00010_ip = 59; continue _fun00009 }
 39:
                    tango = _closure1_slot4;
                    zulu = tango.every;
                    mike = function(argFoo) {
                        zulu = _closure3_slot0;
                        mike = zulu.hasFeature;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike);
 59:
                    return entity;
                }
            };
            zulu = report.bind(oscar)(tango, zulu);
            if(!entity) { _fun00006_ip = 112; continue _fun00005 }
 109:
            entity = zulu;
 112:
            if(!entity) { _fun00006_ip = 118; continue _fun00005 }
 115:
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['useCanUseRoleSubscriptionIAP'] = mike;
    return entity;
})();