// app/modules/potions/utils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/potions/utils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.hasPotions;
            zuuluu = zuuluu.bind(michal)();
            if(zuuluu) { _fun00002_ip = 22; continue _fun00001 }
 18:
            zuuluu = false;
            return zuuluu;
 22:
            zuuluu = michal.potions;
            michal = null;
            if(!(michal == zuuluu)) { _fun00002_ip = 38; continue _fun00001 }
 34:
            zuuluu = new Array(0);
 38:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 0;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            var _closure2_slot0 = michal;
            michal = zuuluu.some;
            entity = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.type;
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    entity = 1;
                    tangon = tangon[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tangon);
                    entity = entity.MessagePotionTypes;
                    entity = entity.CONFETTI;
                    entity = michal === entity;
                    if(!entity) { _fun00004_ip = 91; continue _fun00003 }
 52:
                    michal = _closure2_slot0;
                    michal = !michal;
                    if(michal) { _fun00004_ip = 88; continue _fun00003 }
 65:
                    tangon = zuuluu.emoji;
                    zuuluu = 0;
                    zuuluu = tangon[zuuluu];
                    tangon = zuuluu.id;
                    zuuluu = null;
                    michal = zuuluu != tangon;
 88:
                    entity = michal;
 91:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['messageHasConfettiPotion'] = tangon;
    tangon = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.hasPotions;
            michal = michal.bind(entity)();
            if(michal) { _fun00006_ip = 20; continue _fun00005 }
 16:
            michal = undefined;
            return michal;
 20:
            zuuluu = entity.potions;
            entity = null;
            if(!(entity == zuuluu)) { _fun00006_ip = 36; continue _fun00005 }
 32:
            zuuluu = new Array(0);
 36:
            michal = zuuluu.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 1;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = entity.MessagePotionTypes;
                entity = entity.CONFETTI;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getFirstConfettiPotion'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.id;
            entity = null;
            if(!(entity == michal)) { _fun00008_ip = 34; continue _fun00007 }
 14:
            entity = {};
            michal = zuuluu.optionallyDiverseSequence;
            entity['name'] = michal;
            michal = undefined;
            entity['id'] = michal;
            _fun00008_ip = 57; continue _fun00007;
 34:
            michal = {};
            tangon = zuuluu.id;
            michal['id'] = tangon;
            zuuluu = zuuluu.name;
            michal['name'] = zuuluu;
            entity = michal;
 57:
            return entity;
        }
    };
    zuuluu['disambiguatedEmojiToMessagePotionEmoji'] = michal;
    return entity;
})();