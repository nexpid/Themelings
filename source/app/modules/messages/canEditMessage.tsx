// app/modules/messages/canEditMessage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    var _closure1_slot3 = golfie;
    tangon = tangon.MessageStates;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/canEditMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: canEditMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            zuuluu = argBar;
            option = null;
            entity = option != zuuluu;
            if(!entity) { _fun00002_ip = 248; continue _fun00001 }
 18:
            michal = yankee.author;
            michal = michal.id;
            michal = michal === zuuluu;
            if(!michal) { _fun00002_ip = 245; continue _fun00001 }
 39:
            tangon = yankee.state;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.SENT;
            zuuluu = tangon === zuuluu;
            if(!zuuluu) { _fun00002_ip = 242; continue _fun00001 }
 67:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 1;
            tangon = oscard[tangon];
            offset = undefined;
            tangon = report.bind(offset)(tangon);
            tangon = tangon.bind(offset)(yankee);
            tangon = !tangon;
            if(!tangon) { _fun00002_ip = 239; continue _fun00001 }
 103:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 2;
            report = golfie[report];
            oscard = oscard.bind(offset)(report);
            report = oscard.canEditMessageWithStickers;
            report = report.bind(oscard)(yankee);
            oscard = !report;
            report = !oscard;
            if(oscard) { _fun00002_ip = 236; continue _fun00001 }
 143:
            golfie = yankee.hasFlag;
            oscard = _closure1_slot3;
            oscard = oscard.IS_VOICE_MESSAGE;
            oscard = golfie.bind(yankee)(oscard);
            oscard = !oscard;
            if(!oscard) { _fun00002_ip = 233; continue _fun00001 }
 170:
            golfie = yankee.referralTrialOfferId;
            golfie = option == golfie;
            if(!golfie) { _fun00002_ip = 230; continue _fun00001 }
 183:
            option = yankee.isPoll;
            option = option.bind(yankee)();
            option = !option;
            if(!option) { _fun00002_ip = 227; continue _fun00001 }
 199:
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 3;
            verify = foxtra[verify];
            verify = romeon.bind(offset)(verify);
            verify = verify.bind(offset)(yankee);
            option = !verify;
 227:
            golfie = option;
 230:
            oscard = golfie;
 233:
            report = oscard;
 236:
            tangon = report;
 239:
            zuuluu = tangon;
 242:
            michal = zuuluu;
 245:
            entity = michal;
 248:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();