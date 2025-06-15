// app/modules/guild_onboarding_home/MemberActionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/MemberActionUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useMemberActionsForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            zuuluu = argBar;
            var _closure2_slot1 = zuuluu;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)(michal);
            golfie = _closure1_slot0;
            oscard = 5;
            verify = option[oscard];
            romeon = golfie.bind(tangon)(verify);
            yankee = romeon.useStateFromStores;
            verify = _closure1_slot4;
            offset = new Array(1);
            offset[0] = verify;
            verify = new Array(1);
            verify[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getNewMemberActions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = yankee.bind(romeon)(offset, michal, verify);
            oscard = option[oscard];
            option = golfie.bind(tangon)(oscard);
            golfie = option.useStateFromStores;
            report = _closure1_slot5;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getCompletedActions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = golfie.bind(option)(oscard, report);
            if(zuuluu) { _fun00002_ip = 147; continue _fun00001 }
 143:
            zuuluu = {};
            return zuuluu;
 147:
            oscard = null;
            zuuluu = oscard == michal;
            golfie = undefined;
            if(zuuluu) { _fun00002_ip = 176; continue _fun00001 }
 158:
            zuuluu = michal.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.channelId;
                entity = _closure2_slot1;
                entity = entity.id;
                entity = michal === entity;
                return entity;
            };
            golfie = zuuluu.bind(michal)(entity);
 176:
            option = oscard != golfie;
            zuuluu = 0;
            entity = 0;
            if(!option) { _fun00002_ip = 190; continue _fun00001 }
 187:
            entity = golfie;
 190:
            golfie = entity >= zuuluu;
            zuuluu = null;
            if(!golfie) { _fun00002_ip = 212; continue _fun00001 }
 199:
            golfie = oscard != michal;
            zuuluu = null;
            if(!golfie) { _fun00002_ip = 212; continue _fun00001 }
 208:
            zuuluu = michal[entity];
 212:
            entity = {};
            entity['channelAction'] = zuuluu;
            michal = oscard != zuuluu;
            if(!michal) { _fun00002_ip = 250; continue _fun00001 }
 226:
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 244; continue _fun00001 }
 235:
            zuuluu = zuuluu.channelId;
            tangon = report[zuuluu];
 244:
            zuuluu = true;
            michal = zuuluu === tangon;
 250:
            entity['completed'] = michal;
            return entity;
        }
    };
    zuuluu['useMemberActionsForChannel'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useNextMemberAction
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            entity = argBar;
            var _closure2_slot1 = entity;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 5;
            tangon = golfie[report];
            entity = undefined;
            offset = oscard.bind(entity)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot4;
            option = new Array(1);
            option[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot4;
                michal = zuuluu.getNewMemberActions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = verify.bind(offset)(option, tangon);
            report = golfie[report];
            golfie = oscard.bind(entity)(report);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot5;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getCompletedActions;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            var _closure2_slot2 = zuuluu;
            zuuluu = null;
            zuuluu = zuuluu == tangon;
            if(zuuluu) { _fun00004_ip = 141; continue _fun00003 }
 123:
            zuuluu = tangon.find;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot2;
                    entity = null;
                    entity = entity == tangon;
                    tangon = undefined;
                    if(entity) { _fun00006_ip = 34; continue _fun00005 }
 21:
                    report = _closure2_slot2;
                    entity = zuuluu.channelId;
                    tangon = report[entity];
 34:
                    entity = true;
                    entity = entity !== tangon;
                    if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 43:
                    zuuluu = zuuluu.channelId;
                    michal = _closure2_slot1;
                    entity = zuuluu !== michal;
 56:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal);
 141:
            return entity;
        }
    };
    zuuluu['useNextMemberAction'] = tangon;
    michal = function(argFoo) { // Original name: useAllActionsCompleted
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            report = 5;
            oscard = tangon[report];
            report = undefined;
            option = zuuluu.bind(report)(oscard);
            golfie = option.useStateFromStores;
            verify = _closure1_slot3;
            oscard = new Array(1);
            oscard[0] = verify;
            michal = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getSelfMember;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard, michal);
            michal = 6;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.hasFlag;
            michal = null;
            golfie = michal == oscard;
            if(golfie) { _fun00008_ip = 96; continue _fun00007 }
 91:
            report = oscard.flags;
 96:
            oscard = michal != report;
            michal = 0;
            if(!oscard) { _fun00008_ip = 108; continue _fun00007 }
 105:
            michal = report;
 108:
            entity = _closure1_slot6;
            entity = entity.COMPLETED_HOME_ACTIONS;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useAllActionsCompleted'] = michal;
    return entity;
})();