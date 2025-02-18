// app/modules/action_sheet/native/components/EmojiRowUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MessageFlags;
    var _closure1_slot2 = golfie;
    golfie = tangon.MessageStates;
    var _closure1_slot3 = golfie;
    tangon = tangon.MessageTypes;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/action_sheet/native/components/EmojiRowUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            michal = argBaz;
            if(!entity) { _fun00002_ip = 15; continue _fun00001 }
 12:
            entity = michal;
 15:
            if(!entity) { _fun00002_ip = 40; continue _fun00001 }
 18:
            tangon = zuuluu.state;
            michal = _closure1_slot3;
            michal = michal.SEND_FAILED;
            entity = tangon !== michal;
 40:
            if(!entity) { _fun00002_ip = 65; continue _fun00001 }
 43:
            tangon = zuuluu.type;
            michal = _closure1_slot4;
            michal = michal.THREAD_STARTER_MESSAGE;
            entity = tangon !== michal;
 65:
            if(!entity) { _fun00002_ip = 90; continue _fun00001 }
 68:
            tangon = zuuluu.type;
            michal = _closure1_slot4;
            michal = michal.GUILD_INVITE_REMINDER;
            entity = tangon !== michal;
 90:
            if(!entity) { _fun00002_ip = 148; continue _fun00001 }
 93:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 1;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.hasFlag;
            zuuluu = zuuluu.flags;
            michal = _closure1_slot2;
            michal = michal.EPHEMERAL;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = !michal;
 148:
            return entity;
        }
    };
    zuuluu['shouldShowEmojiRow'] = michal;
    return entity;
})();