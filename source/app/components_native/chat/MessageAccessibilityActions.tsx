// app/components_native/chat/MessageAccessibilityActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    tangon = {};
    report = 'view_profile';
    tangon['VIEW_PROFILE'] = report;
    report = 'add_reaction';
    tangon['ADD_REACTION'] = report;
    report = 'reply';
    tangon['REPLY'] = report;
    var _closure1_slot5 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'components_native/chat/MessageAccessibilityActions.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['MessageAccessibilityAction'] = tangon;
    tangon = function(argFoo) { // Original name: getMessageAccessibilityActionFromLabel
        michal = {};
        golfie = _closure1_slot0;
        option = _closure1_slot1;
        zuuluu = 3;
        tangon = option[zuuluu];
        oscard = undefined;
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.iXAna2;
        report = report.bind(verify)(tangon);
        entity = _closure1_slot5;
        tangon = entity.VIEW_PROFILE;
        michal[report] = tangon;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        verify = tangon.intl;
        report = verify.string;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.lfIHs7;
        report = report.bind(verify)(tangon);
        tangon = entity.ADD_REACTION;
        michal[report] = tangon;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        report = tangon.intl;
        tangon = report.string;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.5IEsGx;
        zuuluu = tangon.bind(report)(zuuluu);
        entity = entity.REPLY;
        michal[zuuluu] = entity;
        entity = argFoo;
        entity = michal[entity];
        return entity;
    };
    zuuluu['getMessageAccessibilityActionFromLabel'] = tangon;
    michal = function(argFoo, argBar) { // Original name: createMessageAccessibilityActions
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argBar;
            entity = null;
            michal = entity == oscard;
            verify = undefined;
            report = undefined;
            if(michal) { _fun00002_ip = 26; continue _fun00001 }
 16:
            michal = oscard.getGuildId;
            report = michal.bind(oscard)();
 26:
            if(!(entity != report)) { _fun00002_ip = 402; continue _fun00001 }
 33:
            if(!(entity != oscard)) { _fun00002_ip = 402; continue _fun00001 }
 40:
            zuuluu = _closure1_slot2;
            michal = zuuluu.canChatInGuild;
            michal = michal.bind(zuuluu)(report);
            if(!michal) { _fun00002_ip = 87; continue _fun00001 }
 61:
            golfie = _closure1_slot3;
            report = golfie.can;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.ADD_REACTIONS;
            michal = report.bind(golfie)(zuuluu, oscard);
 87:
            if(michal) { _fun00002_ip = 112; continue _fun00001 }
 90:
            zuuluu = entity == oscard;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 109; continue _fun00001 }
 99:
            zuuluu = oscard.isPrivate;
            entity = zuuluu.bind(oscard)();
 109:
            michal = entity;
 112:
            zuuluu = {};
            option = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 3;
            report = entity[offset];
            report = option.bind(verify)(report);
            golfie = report.intl;
            report = golfie.string;
            entity = entity[offset];
            entity = option.bind(verify)(entity);
            entity = entity.t;
            entity = entity.iXAna2;
            entity = report.bind(golfie)(entity);
            zuuluu['label'] = entity;
            entity = _closure1_slot5;
            entity = entity.VIEW_PROFILE;
            zuuluu['name'] = entity;
            entity = new Array(1);
            entity[0] = zuuluu;
            if(!michal) { _fun00002_ip = 280; continue _fun00001 }
 198:
            zuuluu = entity.push;
            michal = {};
            yankee = _closure1_slot0;
            report = _closure1_slot1;
            golfie = report[offset];
            golfie = yankee.bind(verify)(golfie);
            option = golfie.intl;
            golfie = option.string;
            report = report[offset];
            report = yankee.bind(verify)(report);
            report = report.t;
            report = report.lfIHs7;
            report = golfie.bind(option)(report);
            michal['label'] = report;
            report = _closure1_slot5;
            report = report.ADD_REACTION;
            michal['name'] = report;
            michal = zuuluu.bind(entity)(michal);
 280:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            report = zuuluu.bind(verify)(michal);
            zuuluu = report.canReplyToMessage;
            michal = argFoo;
            michal = zuuluu.bind(report)(oscard, michal);
            if(!michal) { _fun00002_ip = 400; continue _fun00001 }
 318:
            zuuluu = entity.push;
            michal = {};
            option = _closure1_slot0;
            report = _closure1_slot1;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[offset];
            report = option.bind(verify)(report);
            report = report.t;
            report = report.5IEsGx;
            report = oscard.bind(golfie)(report);
            michal['label'] = report;
            tangon = _closure1_slot5;
            tangon = tangon.REPLY;
            michal['name'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 400:
            return entity;
 402:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['createMessageAccessibilityActions'] = michal;
    return entity;
})();