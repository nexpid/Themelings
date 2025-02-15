// app/records/EntitlementRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun53925: for(var _fun53925_ip = 0; ; ) switch(_fun53925_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun53925_ip = 48; continue _fun53925 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun53925_ip = 86; continue _fun53925;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun53926: for(var _fun53926_ip = 0; ; ) switch(_fun53926_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun53926_ip = 74; continue _fun53926;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    golf = 6;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.EntitlementTypes;
    var _closure1_slot8 = golf;
    mike = function(argFoo) {
        report = function(argFoo) { // Original name: EntitlementRecord
            mike = argFoo;
            report = this;
            oscar = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            oscar = oscar.bind(zulu)(report, tango);
            entity = _closure1_slot9;
            entity = entity.bind(zulu)(report, tango);
            zulu = mike.id;
            entity['id'] = zulu;
            zulu = mike.skuId;
            entity['skuId'] = zulu;
            zulu = mike.applicationId;
            entity['applicationId'] = zulu;
            zulu = mike.userId;
            entity['userId'] = zulu;
            zulu = mike.gifterId;
            entity['gifterId'] = zulu;
            zulu = mike.type;
            entity['type'] = zulu;
            zulu = mike.branches;
            entity['branches'] = zulu;
            zulu = mike.startsAt;
            entity['startsAt'] = zulu;
            zulu = mike.endsAt;
            entity['endsAt'] = zulu;
            zulu = mike.subscriptionId;
            entity['subscriptionId'] = zulu;
            zulu = mike.subscriptionPlanId;
            entity['subscriptionPlanId'] = zulu;
            zulu = mike.parentId;
            entity['parentId'] = zulu;
            zulu = mike.consumed;
            entity['consumed'] = zulu;
            zulu = mike.giftCodeBatchId;
            entity['giftCodeBatchId'] = zulu;
            zulu = mike.giftStyle;
            entity['giftStyle'] = zulu;
            zulu = mike.guildId;
            entity['guildId'] = zulu;
            zulu = mike.deleted;
            entity['deleted'] = zulu;
            mike = mike.sourceType;
            entity['sourceType'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot6;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot3;
        oscar = {};
        mike = 'isGiftable';
        oscar['key'] = mike;
        mike = function() { // Original name: get
            _fun53931: for(var _fun53931_ip = 0; ; ) switch(_fun53931_ip) {
 0:
                mike = this;
                zulu = mike.type;
                entity = _closure1_slot8;
                entity = entity.USER_GIFT;
                entity = zulu === entity;
                if(!entity) { _fun53931_ip = 40; continue _fun53931 }
 28:
                zulu = mike.gifterId;
                mike = null;
                entity = mike == zulu;
 40:
                return entity;
            }
        };
        oscar['get'] = mike;
        mike = new Array(2);
        mike[0] = oscar;
        oscar = {};
        golf = 'isValid';
        oscar['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            _fun53932: for(var _fun53932_ip = 0; ; ) switch(_fun53932_ip) {
 0:
                golf = argBar;
                mike = arguments[2];
                entity = this;
                report = undefined;
                if(!(mike === report)) { _fun53932_ip = 17; continue _fun53932 }
 15:
                mike = null;
 17:
                zulu = entity.isGiftable;
                if(zulu) { _fun53932_ip = 280; continue _fun53932 }
 31:
                zulu = entity.deleted;
                if(zulu) { _fun53932_ip = 280; continue _fun53932 }
 43:
                oscar = entity.type;
                tango = _closure1_slot8;
                tango = tango.PREMIUM_SUBSCRIPTION;
                if(!(oscar === tango)) { _fun53932_ip = 141; continue _fun53932 }
 65:
                oscar = golf.get;
                tango = entity.skuId;
                tango = oscar.bind(golf)(tango);
                oscar = null;
                if(!(oscar != tango)) { _fun53932_ip = 100; continue _fun53932 }
 87:
                tango = tango.premium;
                if(tango) { _fun53932_ip = 100; continue _fun53932 }
 96:
                tango = false;
                return tango;
 100:
                tango = _closure1_slot0;
                oscar = _closure1_slot1;
                zulu = 8;
                zulu = oscar[zulu];
                report = tango.bind(report)(zulu);
                tango = report.canInstallPremiumApplications;
                zulu = argFoo;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun53932_ip = 141; continue _fun53932 }
 137:
                zulu = false;
                return zulu;
 141:
                zulu = global;
                zulu = zulu.Date;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                verify = tango;
                zulu = new verify[zulu](options);
                report = zulu instanceof Object ? zulu : tango;
                tango = entity.startsAt;
                zulu = null;
                if(!(zulu != tango)) { _fun53932_ip = 191; continue _fun53932 }
 181:
                tango = entity.startsAt;
                if(!(!(report < tango))) { _fun53932_ip = 276; continue _fun53932 }
 191:
                tango = entity.endsAt;
                if(!(zulu != tango)) { _fun53932_ip = 211; continue _fun53932 }
 201:
                tango = entity.endsAt;
                if(!(!(report >= tango))) { _fun53932_ip = 272; continue _fun53932 }
 211:
                if(!(zulu != mike)) { _fun53932_ip = 264; continue _fun53932 }
 215:
                zulu = entity.branches;
                tango = zulu.length;
                zulu = 0;
                if(!(zulu !== tango)) { _fun53932_ip = 255; continue _fun53932 }
 232:
                tango = entity.branches;
                zulu = tango.includes;
                zulu = zulu.bind(tango)(mike);
                if(zulu) { _fun53932_ip = 264; continue _fun53932 }
 251:
                zulu = false;
                return zulu;
 255:
                entity = entity.applicationId;
                if(!(entity === mike)) { _fun53932_ip = 268; continue _fun53932 }
 264:
                entity = true;
                return entity;
 268:
                entity = false;
                return entity;
 272:
                entity = false;
                return entity;
 276:
                entity = false;
                return entity;
 280:
                entity = false;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'createFromServer';
        oscar['key'] = golf;
        entity = function(argFoo) { // Original name: value
            _fun53933: for(var _fun53933_ip = 0; ; ) switch(_fun53933_ip) {
 0:
                tango = argFoo;
                zulu = _closure2_slot0;
                entity = {};
                mike = tango.id;
                entity['id'] = mike;
                mike = tango.sku_id;
                entity['skuId'] = mike;
                mike = tango.application_id;
                entity['applicationId'] = mike;
                mike = tango.user_id;
                entity['userId'] = mike;
                mike = tango.gifter_user_id;
                entity['gifterId'] = mike;
                mike = tango.type;
                entity['type'] = mike;
                report = tango.branches;
                mike = null;
                if(!(mike == report)) { _fun53933_ip = 90; continue _fun53933 }
 86:
                report = new Array(0);
 90:
                entity['branches'] = report;
                report = tango.starts_at;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 144; continue _fun53933 }
 110:
                oscar = global;
                options = oscar.Date;
                verify = tango.starts_at;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                offset = golf;
                oscar = new offset[options](verify, options);
                report = oscar instanceof Object ? oscar : golf;
 144:
                entity['startsAt'] = report;
                report = tango.ends_at;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 198; continue _fun53933 }
 164:
                oscar = global;
                options = oscar.Date;
                verify = tango.ends_at;
                golf = options.prototype;
                golf = Object.create(golf, {constructor: {value: options}});
                offset = golf;
                oscar = new offset[options](verify, options);
                report = oscar instanceof Object ? oscar : golf;
 198:
                entity['endsAt'] = report;
                report = tango.subscription_id;
                entity['subscriptionId'] = report;
                report = tango.subscription_plan;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 240; continue _fun53933 }
 229:
                oscar = tango.subscription_plan;
                report = oscar.id;
 240:
                entity['subscriptionPlanId'] = report;
                report = tango.parent_id;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 266; continue _fun53933 }
 260:
                report = tango.parent_id;
 266:
                entity['parentId'] = report;
                report = tango.consumed;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 292; continue _fun53933 }
 286:
                report = tango.consumed;
 292:
                entity['consumed'] = report;
                oscar = tango.gift_code_batch_id;
                golf = mike != oscar;
                report = null;
                if(!golf) { _fun53933_ip = 317; continue _fun53933 }
 314:
                report = oscar;
 317:
                entity['giftCodeBatchId'] = report;
                report = tango.gift_style;
                entity['giftStyle'] = report;
                report = tango.guild_id;
                entity['guildId'] = report;
                report = tango.deleted;
                entity['deleted'] = report;
                report = tango.sku;
                oscar = mike != report;
                report = null;
                if(!oscar) { _fun53933_ip = 392; continue _fun53933 }
 368:
                options = _closure1_slot7;
                golf = options.createFromServer;
                oscar = tango.sku;
                report = golf.bind(options)(oscar);
 392:
                entity['sku'] = report;
                tango = tango.source_type;
                report = mike != tango;
                mike = null;
                if(!report) { _fun53933_ip = 417; continue _fun53933 }
 414:
                mike = tango;
 417:
                entity['sourceType'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                offset = mike;
                verify = entity;
                entity = new offset[zulu](verify, options);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'records/EntitlementRecord.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();