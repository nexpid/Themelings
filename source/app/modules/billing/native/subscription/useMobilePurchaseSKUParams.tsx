// app/modules/billing/native/subscription/useMobilePurchaseSKUParams.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/billing/native/subscription/useMobilePurchaseSKUParams.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useMobilePurchaseSKUParams
        golfie = argFoo;
        option = argBar;
        report = argBaz;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = option;
        var _closure2_slot2 = report;
        oscard = _closure1_slot1;
        tangon = _closure1_slot2;
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        zuuluu = oscard.bind(tangon)(zuuluu);
        oscard = zuuluu.bind(tangon)();
        var _closure2_slot3 = oscard;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                entity = null;
                if(!(entity != michal)) { _fun00002_ip = 258; continue _fun00001 }
 16:
                michal = _closure2_slot1;
                if(!(entity !== michal)) { _fun00002_ip = 258; continue _fun00001 }
 27:
                michal = _closure2_slot3;
                if(!(entity != michal)) { _fun00002_ip = 258; continue _fun00001 }
 38:
                michal = _closure2_slot2;
                michal = entity == michal;
                option = undefined;
                tangon = undefined;
                if(michal) { _fun00002_ip = 63; continue _fun00001 }
 53:
                michal = _closure2_slot2;
                tangon = michal.isGift;
 63:
                if(tangon) { _fun00002_ip = 68; continue _fun00001 }
 66:
                tangon = false;
 68:
                michal = tangon;
                if(!michal) { _fun00002_ip = 101; continue _fun00001 }
 74:
                zuuluu = _closure2_slot2;
                oscard = entity == zuuluu;
                zuuluu = undefined;
                if(oscard) { _fun00002_ip = 97; continue _fun00001 }
 87:
                oscard = _closure2_slot2;
                zuuluu = oscard.giftRecipientId;
 97:
                michal = entity != zuuluu;
 101:
                if(!michal) { _fun00002_ip = 135; continue _fun00001 }
 104:
                zuuluu = _closure2_slot2;
                zuuluu = entity == zuuluu;
                oscard = undefined;
                if(zuuluu) { _fun00002_ip = 127; continue _fun00001 }
 117:
                zuuluu = _closure2_slot2;
                oscard = zuuluu.giftRecipientId;
 127:
                zuuluu = '';
                michal = zuuluu !== oscard;
 135:
                zuuluu = undefined;
                if(!michal) { _fun00002_ip = 171; continue _fun00001 }
 140:
                michal = {};
                oscard = _closure2_slot2;
                golfie = oscard.giftRecipientId;
                michal['recipient_id'] = golfie;
                oscard = oscard.giftMessage;
                michal['custom_message'] = oscard;
                zuuluu = michal;
 171:
                michal = {};
                golfie = _closure1_slot0;
                verify = _closure1_slot2;
                oscard = 2;
                oscard = verify[oscard];
                golfie = golfie.bind(option)(oscard);
                oscard = golfie.v4;
                oscard = oscard.bind(golfie)();
                michal['requestIdentifier'] = oscard;
                oscard = _closure2_slot0;
                michal['skuId'] = oscard;
                report = _closure2_slot1;
                oscard = report.country;
                michal['countryCode'] = oscard;
                report = report.currency;
                michal['currency'] = report;
                michal['isGift'] = tangon;
                michal['giftInfoOptions'] = zuuluu;
                return michal;
 258:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();