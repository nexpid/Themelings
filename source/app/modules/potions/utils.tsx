// app/modules/potions/utils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    tango = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, oscar);
    entity = 2;
    tango = tango[entity];
    entity = undefined;
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/potions/utils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) {
        _fun69400: for(var _fun69400_ip = 0; ; ) switch(_fun69400_ip) {
 0:
            mike = argFoo;
            zulu = mike.hasPotions;
            zulu = zulu.bind(mike)();
            if(zulu) { _fun69400_ip = 22; continue _fun69400 }
 18:
            zulu = false;
            return zulu;
 22:
            zulu = mike.potions;
            mike = null;
            if(!(mike == zulu)) { _fun69400_ip = 38; continue _fun69400 }
 34:
            zulu = new Array(0);
 38:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 0;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.isAndroid;
            mike = mike.bind(tango)();
            var _closure2_slot0 = mike;
            mike = zulu.some;
            entity = function(argFoo) {
                _fun69401: for(var _fun69401_ip = 0; ; ) switch(_fun69401_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.type;
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    entity = 1;
                    tango = tango[entity];
                    entity = undefined;
                    entity = report.bind(entity)(tango);
                    entity = entity.MessagePotionTypes;
                    entity = entity.CONFETTI;
                    entity = mike === entity;
                    if(!entity) { _fun69401_ip = 91; continue _fun69401 }
 52:
                    mike = _closure2_slot0;
                    mike = !mike;
                    if(mike) { _fun69401_ip = 88; continue _fun69401 }
 65:
                    tango = zulu.emoji;
                    zulu = 0;
                    zulu = tango[zulu];
                    tango = zulu.id;
                    zulu = null;
                    mike = zulu != tango;
 88:
                    entity = mike;
 91:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['messageHasConfettiPotion'] = tango;
    tango = function(argFoo) {
        _fun69402: for(var _fun69402_ip = 0; ; ) switch(_fun69402_ip) {
 0:
            entity = argFoo;
            mike = entity.hasPotions;
            mike = mike.bind(entity)();
            if(mike) { _fun69402_ip = 20; continue _fun69402 }
 16:
            mike = undefined;
            return mike;
 20:
            zulu = entity.potions;
            entity = null;
            if(!(entity == zulu)) { _fun69402_ip = 36; continue _fun69402 }
 32:
            zulu = new Array(0);
 36:
            mike = zulu.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                entity = 1;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.MessagePotionTypes;
                entity = entity.CONFETTI;
                entity = mike === entity;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getFirstConfettiPotion'] = tango;
    mike = function(argFoo) {
        _fun69404: for(var _fun69404_ip = 0; ; ) switch(_fun69404_ip) {
 0:
            zulu = argFoo;
            mike = zulu.id;
            entity = null;
            if(!(entity == mike)) { _fun69404_ip = 34; continue _fun69404 }
 14:
            entity = {};
            mike = zulu.optionallyDiverseSequence;
            entity['name'] = mike;
            mike = undefined;
            entity['id'] = mike;
            _fun69404_ip = 57; continue _fun69404;
 34:
            mike = {};
            tango = zulu.id;
            mike['id'] = tango;
            zulu = zulu.name;
            mike['name'] = zulu;
            entity = mike;
 57:
            return entity;
        }
    };
    zulu['disambiguatedEmojiToMessagePotionEmoji'] = mike;
    return entity;
})();