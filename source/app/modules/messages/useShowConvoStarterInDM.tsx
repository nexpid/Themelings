// app/modules/messages/useShowConvoStarterInDM.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RelationshipTypes;
    var _closure1_slot6 = golfie;
    tangon = tangon.UserFlags;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/useShowConvoStarterInDM.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 25;
    zuuluu['MAX_MESSAGES_ALLOWED_FOR_GREETING'] = tangon;
    michal = function(argFoo) { // Original name: useShowConvoStarterInDM
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            var _closure2_slot0 = golfie;
            michal = golfie.isDM;
            option = michal.bind(golfie)();
            if(!option) { _fun00002_ip = 35; continue _fun00001 }
 22:
            michal = golfie.isSystemDM;
            michal = michal.bind(golfie)();
            option = !michal;
 35:
            if(!option) { _fun00002_ip = 65; continue _fun00001 }
 38:
            tangon = golfie.rawRecipients;
            zuuluu = tangon.some;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.bot;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            option = !michal;
 65:
            var _closure2_slot1 = option;
            oscard = null;
            if(!option) { _fun00002_ip = 84; continue _fun00001 }
 74:
            michal = golfie.getRecipientId;
            oscard = michal.bind(golfie)();
 84:
            var _closure2_slot2 = oscard;
            report = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            tangon = undefined;
            yankee = report.bind(tangon)(zuuluu);
            verify = yankee.useStrangerDangerWarning;
            zuuluu = golfie.id;
            verify = verify.bind(yankee)(zuuluu);
            var _closure2_slot3 = verify;
            zuuluu = 6;
            zuuluu = offset[zuuluu];
            report = report.bind(tangon)(zuuluu);
            tangon = report.useStateFromStores;
            offset = _closure1_slot3;
            zuuluu = new Array(4);
            zuuluu[0] = offset;
            offset = _closure1_slot2;
            zuuluu[1] = offset;
            offset = _closure1_slot4;
            zuuluu[2] = offset;
            michal = _closure1_slot5;
            zuuluu[3] = michal;
            michal = new Array(4);
            michal[0] = verify;
            michal[1] = option;
            golfie = golfie.id;
            michal[2] = golfie;
            michal[3] = oscard;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00004_ip = 274; continue _fun00003 }
 16:
                    zuuluu = _closure2_slot1;
                    if(zuuluu) { _fun00004_ip = 27; continue _fun00003 }
 23:
                    zuuluu = false;
                    return zuuluu;
 27:
                    oscard = _closure1_slot2;
                    report = oscard.isMessageRequest;
                    tangon = _closure2_slot0;
                    tangon = tangon.id;
                    tangon = report.bind(oscard)(tangon);
                    if(tangon) { _fun00004_ip = 270; continue _fun00003 }
 60:
                    tangon = _closure2_slot2;
                    if(!(entity != tangon)) { _fun00004_ip = 104; continue _fun00003 }
 68:
                    oscard = _closure1_slot4;
                    report = oscard.getRelationshipType;
                    tangon = _closure2_slot2;
                    report = report.bind(oscard)(tangon);
                    tangon = _closure1_slot6;
                    tangon = tangon.BLOCKED;
                    if(!(report !== tangon)) { _fun00004_ip = 266; continue _fun00003 }
 104:
                    tangon = _closure2_slot2;
                    if(!(entity != tangon)) { _fun00004_ip = 159; continue _fun00003 }
 112:
                    oscard = _closure1_slot5;
                    report = oscard.getUser;
                    tangon = _closure2_slot2;
                    report = report.bind(oscard)(tangon);
                    if(!(entity != report)) { _fun00004_ip = 159; continue _fun00003 }
 135:
                    tangon = report.hasFlag;
                    entity = _closure1_slot7;
                    entity = entity.PROVISIONAL_ACCOUNT;
                    entity = tangon.bind(report)(entity);
                    if(entity) { _fun00004_ip = 262; continue _fun00003 }
 159:
                    report = _closure1_slot3;
                    tangon = report.getMessages;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.ready;
                    if(!entity) { _fun00004_ip = 201; continue _fun00003 }
 192:
                    report = tangon.hasMoreBefore;
                    entity = !report;
 201:
                    if(!entity) { _fun00004_ip = 213; continue _fun00003 }
 204:
                    report = tangon.hasMoreAfter;
                    entity = !report;
 213:
                    if(!entity) { _fun00004_ip = 228; continue _fun00003 }
 216:
                    report = tangon.length;
                    tangon = 25;
                    entity = report < tangon;
 228:
                    if(!entity) { _fun00004_ip = 260; continue _fun00003 }
 231:
                    tangon = _closure1_slot3;
                    zuuluu = tangon.hasCurrentUserSentMessage;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = !michal;
 260:
                    return entity;
 262:
                    entity = false;
                    return entity;
 266:
                    entity = false;
                    return entity;
 270:
                    entity = false;
                    return entity;
 274:
                    entity = false;
                    return entity;
                }
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useShowConvoStarterInDM'] = michal;
    return entity;
})();