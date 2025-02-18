// app/modules/welcome_cta/WelcomeCTAUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
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
    tangon = report.bind(entity)(tangon);
    tangon = tangon.WELCOME_STICKERS;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/welcome_cta/WelcomeCTAUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: pickHelloSticker
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            tangon = michal == zuuluu;
            oscard = undefined;
            report = undefined;
            if(tangon) { _fun00002_ip = 34; continue _fun00001 }
 29:
            report = zuuluu.id;
 34:
            michal = michal != report;
            zuuluu = 0;
            if(!michal) { _fun00002_ip = 74; continue _fun00001 }
 43:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            michal = golfie[michal];
            tangon = tangon.bind(oscard)(michal);
            michal = tangon.extractTimestamp;
            zuuluu = michal.bind(tangon)(report);
 74:
            michal = _closure1_slot3;
            entity = michal.length;
            entity = zuuluu % entity;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['pickHelloSticker'] = tangon;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot2;
            michal = zuuluu.getCurrentUser;
            zuuluu = michal.bind(zuuluu)();
            michal = null;
            tangon = michal == zuuluu;
            report = undefined;
            oscard = undefined;
            if(tangon) { _fun00004_ip = 34; continue _fun00003 }
 29:
            oscard = zuuluu.id;
 34:
            michal = michal != oscard;
            zuuluu = 0;
            if(!michal) { _fun00004_ip = 74; continue _fun00003 }
 43:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            michal = golfie[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.extractTimestamp;
            zuuluu = michal.bind(tangon)(oscard);
 74:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            report = tangon.bind(report)(michal);
            tangon = report.extractTimestamp;
            michal = argFoo;
            michal = tangon.bind(report)(michal);
            zuuluu = zuuluu + michal;
            michal = _closure1_slot3;
            entity = michal.length;
            entity = zuuluu % entity;
            entity = michal[entity];
            return entity;
        }
    };
    zuuluu['pickWelcomeSticker'] = tangon;
    michal = function(argFoo, argBar, argBaz) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            verify = argFoo;
            golfie = argBar;
            option = argBaz;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 4;
            report = tangon[michal];
            entity = undefined;
            yankee = zuuluu.bind(entity)(report);
            offset = yankee.sendGreetMessage;
            report = verify.id;
            michal = tangon[michal];
            foxtra = zuuluu.bind(entity)(michal);
            romeon = foxtra.getSendMessageOptionsForReply;
            michal = {};
            michal['channel'] = verify;
            michal['message'] = golfie;
            verify = true;
            michal['shouldMention'] = verify;
            michal['showMentionToggle'] = verify;
            michal = romeon.bind(foxtra)(michal);
            michal = offset.bind(yankee)(report, option, michal);
            michal = 5;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.WELCOME_CTA_CLICKED;
            michal = {};
            michal['is_reply'] = verify;
            michal['sticker_id'] = option;
            golfie = golfie.author;
            golfie = golfie.id;
            michal['target_user'] = golfie;
            golfie = _closure1_slot2;
            oscard = golfie.getCurrentUser;
            golfie = oscard.bind(golfie)();
            oscard = null;
            option = oscard == golfie;
            oscard = undefined;
            if(option) { _fun00006_ip = 180; continue _fun00005 }
 175:
            oscard = golfie.id;
 180:
            michal['sender'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['handleWelcomeCtaClicked'] = michal;
    return entity;
})();