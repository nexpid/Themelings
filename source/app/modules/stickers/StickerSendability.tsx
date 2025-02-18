// app/modules/stickers/StickerSendability.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    oscard = 0;
    tangon = option[oscard];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    report = {};
    report['SENDABLE'] = oscard;
    tangon = 'SENDABLE';
    report[oscard] = tangon;
    oscard = 1;
    report['SENDABLE_WITH_PREMIUM'] = oscard;
    tangon = 'SENDABLE_WITH_PREMIUM';
    report[oscard] = tangon;
    oscard = 2;
    report['NONSENDABLE'] = oscard;
    tangon = 'NONSENDABLE';
    report[oscard] = tangon;
    oscard = 3;
    report['SENDABLE_WITH_BOOSTED_GUILD'] = oscard;
    tangon = 'SENDABLE_WITH_BOOSTED_GUILD';
    report[oscard] = tangon;
    var _closure1_slot5 = report;
    tangon = function(argFoo, argBar, argBaz) { // Original name: getStickerSendability
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            verify = argBar;
            option = argBaz;
            oscard = null;
            if(!(oscard != verify)) { _fun00002_ip = 333; continue _fun00001 }
 18:
            report = _closure1_slot1;
            entity = _closure1_slot3;
            zuuluu = 1;
            zuuluu = entity[zuuluu];
            golfie = undefined;
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.canUseCustomStickersEverywhere;
            report = zuuluu.bind(report)(verify);
            zuuluu = _closure1_slot0;
            offset = 2;
            entity = entity[offset];
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.isStandardSticker;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00002_ip = 321; continue _fun00001 }
 87:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[offset];
            zuuluu = zuuluu.bind(golfie)(entity);
            entity = zuuluu.isGuildSticker;
            entity = entity.bind(zuuluu)(tangon);
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 118:
            if(!(oscard == option)) { _fun00002_ip = 137; continue _fun00001 }
 122:
            entity = _closure1_slot5;
            entity = entity.NONSENDABLE;
            _fun00002_ip = 319; continue _fun00001;
 137:
            zuuluu = tangon.available;
            if(zuuluu) { _fun00002_ip = 161; continue _fun00001 }
 146:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.SENDABLE_WITH_BOOSTED_GUILD;
            _fun00002_ip = 316; continue _fun00001;
 161:
            offset = option.guild_id;
            if(!(oscard != offset)) { _fun00002_ip = 197; continue _fun00001 }
 170:
            yankee = option.guild_id;
            offset = '';
            if(!(offset !== yankee)) { _fun00002_ip = 197; continue _fun00001 }
 183:
            offset = option.guild_id;
            tangon = tangon.guild_id;
            if(!(offset !== tangon)) { _fun00002_ip = 303; continue _fun00001 }
 197:
            tangon = option.guild_id;
            if(!(oscard != tangon)) { _fun00002_ip = 277; continue _fun00001 }
 206:
            oscard = _closure1_slot2;
            offset = _closure1_slot3;
            tangon = 3;
            tangon = offset[tangon];
            golfie = oscard.bind(golfie)(tangon);
            oscard = golfie.can;
            tangon = {};
            offset = _closure1_slot4;
            offset = offset.USE_EXTERNAL_STICKERS;
            tangon['permission'] = offset;
            tangon['user'] = verify;
            tangon['context'] = option;
            tangon = oscard.bind(golfie)(tangon);
            if(tangon) { _fun00002_ip = 277; continue _fun00001 }
 265:
            tangon = _closure1_slot5;
            tangon = tangon.NONSENDABLE;
            _fun00002_ip = 301; continue _fun00001;
 277:
            oscard = _closure1_slot5;
            if(report) { _fun00002_ip = 292; continue _fun00001 }
 284:
            report = oscard.SENDABLE_WITH_PREMIUM;
            _fun00002_ip = 298; continue _fun00001;
 292:
            report = oscard.SENDABLE;
 298:
            tangon = report;
 301:
            _fun00002_ip = 313; continue _fun00001;
 303:
            report = _closure1_slot5;
            tangon = report.SENDABLE;
 313:
            zuuluu = tangon;
 316:
            entity = zuuluu;
 319:
            _fun00002_ip = 331; continue _fun00001;
 321:
            michal = _closure1_slot5;
            entity = michal.SENDABLE;
 331:
            return entity;
 333:
            entity = _closure1_slot5;
            entity = entity.NONSENDABLE;
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    oscard = 4;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/stickers/StickerSendability.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['StickerSendability'] = report;
    zuuluu['getStickerSendability'] = tangon;
    michal = function(argFoo, argBar, argBaz) {
        oscard = _closure1_slot6;
        report = undefined;
        tangon = argFoo;
        zuuluu = argBar;
        michal = argBaz;
        michal = oscard.bind(report)(tangon, zuuluu, michal);
        entity = _closure1_slot5;
        entity = entity.SENDABLE;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isSendableSticker'] = michal;
    return entity;
})();