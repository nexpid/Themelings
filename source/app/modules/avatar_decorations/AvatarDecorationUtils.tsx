// app/modules/avatar_decorations/AvatarDecorationUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = options[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot2 = tango;
    report = function(argFoo) { // Original name: parseAvatarDecorationData
        _fun36629: for(var _fun36629_ip = 0; ; ) switch(_fun36629_ip) {
 0:
            zulu = argFoo;
            mike = 'object';
            entity = typeof zulu;
            if(!(mike === entity)) { _fun36629_ip = 241; continue _fun36629 }
 17:
            entity = null;
            if(!(entity != zulu)) { _fun36629_ip = 241; continue _fun36629 }
 26:
            mike = 'asset';
            mike = mike in zulu;
            if(!mike) { _fun36629_ip = 239; continue _fun36629 }
 40:
            mike = zulu.asset;
            oscar = 'string';
            mike = typeof mike;
            if(!(oscar === mike)) { _fun36629_ip = 239; continue _fun36629 }
 60:
            mike = {};
            tango = zulu.asset;
            mike['asset'] = tango;
            tango = 'sku_id';
            tango = tango in zulu;
            if(!tango) { _fun36629_ip = 97; continue _fun36629 }
 84:
            report = zulu.sku_id;
            report = typeof report;
            tango = oscar === report;
 97:
            if(!tango) { _fun36629_ip = 112; continue _fun36629 }
 100:
            tango = zulu.sku_id;
            mike['skuId'] = tango;
 112:
            tango = 'skuId';
            tango = tango in zulu;
            if(!tango) { _fun36629_ip = 136; continue _fun36629 }
 123:
            report = zulu.skuId;
            report = typeof report;
            tango = oscar === report;
 136:
            if(!tango) { _fun36629_ip = 151; continue _fun36629 }
 139:
            tango = zulu.skuId;
            mike['skuId'] = tango;
 151:
            tango = 'expires_at';
            tango = tango in zulu;
            if(!tango) { _fun36629_ip = 179; continue _fun36629 }
 162:
            report = zulu.expires_at;
            oscar = 'number';
            report = typeof report;
            tango = oscar === report;
 179:
            if(!tango) { _fun36629_ip = 194; continue _fun36629 }
 182:
            tango = zulu.expires_at;
            mike['expiresAt'] = tango;
 194:
            tango = 'expiresAt';
            tango = tango in zulu;
            if(!tango) { _fun36629_ip = 222; continue _fun36629 }
 205:
            report = zulu.expiresAt;
            oscar = 'number';
            report = typeof report;
            tango = oscar === report;
 222:
            if(!tango) { _fun36629_ip = 237; continue _fun36629 }
 225:
            zulu = zulu.expiresAt;
            mike['expiresAt'] = zulu;
 237:
            return mike;
 239:
            return entity;
 241:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tango = function(argFoo) { // Original name: isAvatarDecorationExpired
        _fun36630: for(var _fun36630_ip = 0; ; ) switch(_fun36630_ip) {
 0:
            mike = argFoo;
            tango = null;
            zulu = tango == mike;
            oscar = undefined;
            if(zulu) { _fun36630_ip = 20; continue _fun36630 }
 14:
            oscar = mike.skuId;
 20:
            golf = 950400000;
            report = '1251324401459265537';
            zulu = golf;
            if(!(report !== oscar)) { _fun36630_ip = 74; continue _fun36630 }
 39:
            report = tango == mike;
            oscar = undefined;
            if(report) { _fun36630_ip = 54; continue _fun36630 }
 48:
            oscar = mike.skuId;
 54:
            report = '1252353273256480818';
            zulu = golf;
            if(!(report !== oscar)) { _fun36630_ip = 74; continue _fun36630 }
 67:
            zulu = _closure1_slot2;
 74:
            report = tango == mike;
            entity = undefined;
            if(report) { _fun36630_ip = 89; continue _fun36630 }
 83:
            entity = mike.expiresAt;
 89:
            entity = tango != entity;
            if(!entity) { _fun36630_ip = 137; continue _fun36630 }
 96:
            tango = mike.expiresAt;
            mike = 1000;
            mike = mike * tango;
            zulu = mike + zulu;
            mike = global;
            tango = mike.Date;
            mike = tango.now;
            mike = mike.bind(tango)();
            entity = zulu < mike;
 137:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    oscar = 2;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/avatar_decorations/AvatarDecorationUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) {
        tango = argFoo;
        zulu = tango.split;
        mike = '_';
        entity = 2;
        zulu = zulu.bind(tango)(mike, entity);
        mike = zulu.includes;
        entity = 'a';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isAnimatedAvatarDecoration'] = oscar;
    zulu['parseAvatarDecorationData'] = report;
    zulu['isAvatarDecorationExpired'] = tango;
    tango = function(argFoo, argBar) {
        _fun36632: for(var _fun36632_ip = 0; ; ) switch(_fun36632_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            entity = null;
            if(!(entity != zulu)) { _fun36632_ip = 69; continue _fun36632 }
 12:
            if(!(entity != mike)) { _fun36632_ip = 69; continue _fun36632 }
 16:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            tango = 1;
            tango = oscar[tango];
            golf = undefined;
            oscar = report.bind(golf)(tango);
            report = oscar.isEqual;
            entity = _closure1_slot3;
            tango = entity.bind(golf)(zulu);
            entity = entity.bind(golf)(mike);
            entity = report.bind(oscar)(tango, entity);
            _fun36632_ip = 73; continue _fun36632;
 69:
            entity = zulu === mike;
 73:
            return entity;
        }
    };
    zulu['isEqualAvatarDecoration'] = tango;
    mike = function(argFoo, argBar) {
        _fun36633: for(var _fun36633_ip = 0; ; ) switch(_fun36633_ip) {
 0:
            tango = argFoo;
            zulu = null;
            entity = argBar;
            entity = zulu != entity;
            if(!entity) { _fun36633_ip = 47; continue _fun36633 }
 15:
            oscar = _closure1_slot4;
            golf = zulu == tango;
            report = undefined;
            mike = undefined;
            if(golf) { _fun36633_ip = 39; continue _fun36633 }
 33:
            mike = tango.avatarDecoration;
 39:
            mike = oscar.bind(report)(mike);
            entity = !mike;
 47:
            if(!entity) { _fun36633_ip = 84; continue _fun36633 }
 50:
            report = zulu == tango;
            mike = undefined;
            if(report) { _fun36633_ip = 80; continue _fun36633 }
 59:
            tango = tango.avatarDecoration;
            report = zulu == tango;
            mike = undefined;
            if(report) { _fun36633_ip = 80; continue _fun36633 }
 74:
            mike = tango.asset;
 80:
            entity = zulu != mike;
 84:
            return entity;
        }
    };
    zulu['hasGlobalDefaultAvatarDecoration'] = mike;
    return entity;
})();