// app/modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar) { // Original name: compareVersions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.split;
            tangon = '.';
            report = entity.bind(michal)(tangon);
            zuuluu = report.map;
            entity = global;
            michal = entity.Number;
            oscard = zuuluu.bind(report)(michal);
            zuuluu = '13.2';
            michal = zuuluu.split;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.map;
            michal = entity.Number;
            report = zuuluu.bind(tangon)(michal);
            tangon = entity.Math;
            zuuluu = tangon.max;
            michal = oscard.length;
            entity = report.length;
            tangon = zuuluu.bind(tangon)(michal, entity);
            entity = 0;
            golfie = entity < tangon;
            zuuluu = null;
            michal = 0;
            if(!golfie) { _fun00002_ip = 154; continue _fun00001 }
 107:
            golfie = oscard[michal];
            verify = zuuluu != golfie;
            option = 0;
            if(!verify) { _fun00002_ip = 123; continue _fun00001 }
 120:
            option = golfie;
 123:
            verify = report[michal];
            offset = zuuluu != verify;
            golfie = 0;
            if(!offset) { _fun00002_ip = 139; continue _fun00001 }
 136:
            golfie = verify;
 139:
            if(!(!(option < golfie))) { _fun00002_ip = 161; continue _fun00001 }
 143:
            if(!(!(option > golfie))) { _fun00002_ip = 156; continue _fun00001 }
 147:
            michal = michal + 1;
            if(michal < tangon) { _fun00002_ip = 107; continue _fun00001 }
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
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argBaz;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    golfie = tangon.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
    tangon = new Array(1);
    tangon[0] = golfie;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/feature_gating/IAPEligibility.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canUseRoleSubscriptionIAP
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            entity = 3;
            entity = report[entity];
            golfie = undefined;
            tangon = tangon.bind(golfie)(entity);
            entity = tangon.isIOS;
            entity = entity.bind(tangon)();
            if(entity) { _fun00004_ip = 44; continue _fun00003 }
 40:
            entity = false;
            return entity;
 44:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            entity = 4;
            entity = report[entity];
            tangon = tangon.bind(golfie)(entity);
            entity = tangon.getSystemVersion;
            oscard = entity.bind(tangon)();
            tangon = null;
            if(!(tangon != oscard)) { _fun00004_ip = 162; continue _fun00003 }
 80:
            report = _closure1_slot5;
            entity = '13.2';
            report = report.bind(golfie)(oscard, entity);
            entity = -1;
            if(!(entity !== report)) { _fun00004_ip = 162; continue _fun00003 }
 106:
            oscard = _closure1_slot3;
            report = oscard.getGuild;
            entity = argFoo;
            entity = report.bind(oscard)(entity);
            var _closure2_slot0 = entity;
            entity = tangon != entity;
            if(!entity) { _fun00004_ip = 160; continue _fun00003 }
 134:
            tangon = _closure1_slot4;
            zuuluu = tangon.every;
            michal = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.hasFeature;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            entity = !michal;
 160:
            return entity;
 162:
            entity = false;
            return entity;
        }
    };
    zuuluu['canUseRoleSubscriptionIAP'] = tangon;
    michal = function(argFoo) { // Original name: useCanUseRoleSubscriptionIAP
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golfie = _closure1_slot2;
            report = golfie.useMemo;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 4;
                    entity = tangon[entity];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(entity);
                    entity = zuuluu.getSystemVersion;
                    tangon = entity.bind(zuuluu)();
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00008_ip = 66; continue _fun00007 }
 44:
                    zuuluu = _closure1_slot5;
                    michal = '13.2';
                    zuuluu = zuuluu.bind(report)(tangon, michal);
                    michal = 0;
                    entity = zuuluu >= michal;
 66:
                    return entity;
                }
            };
            entity = new Array(0);
            michal = report.bind(golfie)(michal, entity);
            oscard = golfie.useMemo;
            report = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.isIOS;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = new Array(0);
            entity = oscard.bind(golfie)(report, entity);
            golfie = _closure1_slot0;
            oscard = _closure1_slot1;
            report = 5;
            oscard = oscard[report];
            report = undefined;
            oscard = golfie.bind(report)(oscard);
            report = oscard.useStateFromStores;
            golfie = _closure1_slot3;
            tangon = new Array(1);
            tangon[0] = golfie;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = _closure1_slot3;
                    tangon = report.getGuild;
                    entity = _closure2_slot0;
                    tangon = tangon.bind(report)(entity);
                    var _closure3_slot0 = tangon;
                    entity = null;
                    entity = entity != tangon;
                    if(!entity) { _fun00010_ip = 59; continue _fun00009 }
 39:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.every;
                    michal = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.hasFeature;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(michal);
 59:
                    return entity;
                }
            };
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            if(!entity) { _fun00006_ip = 112; continue _fun00005 }
 109:
            entity = zuuluu;
 112:
            if(!entity) { _fun00006_ip = 118; continue _fun00005 }
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    zuuluu['useCanUseRoleSubscriptionIAP'] = michal;
    return entity;
})();