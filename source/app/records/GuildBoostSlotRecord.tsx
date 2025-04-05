// app/records/GuildBoostSlotRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot5 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: GuildBoostSlotRecord
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = argFoo;
                report = this;
                entity = _closure1_slot0;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                entity = _closure1_slot3;
                offset = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot2;
                entity = _closure1_slot5;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 65; continue _fun00003 }
 52:
                entity = offset.apply;
                entity = entity.bind(offset)(report, tangon);
                _fun00004_ip = 103; continue _fun00003;
 65:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(tangon)(report);
                golfie = oscard.constructor;
                oscard = new Array(0);
                entity = option.bind(verify)(offset, oscard, golfie);
 103:
                entity = zuuluu.bind(tangon)(report, entity);
                zuuluu = michal.id;
                entity['id'] = zuuluu;
                zuuluu = michal.subscriptionId;
                entity['subscriptionId'] = zuuluu;
                zuuluu = michal.premiumGuildSubscription;
                entity['premiumGuildSubscription'] = zuuluu;
                zuuluu = michal.canceled;
                entity['canceled'] = zuuluu;
                zuuluu = michal.cooldownEndsAt;
                entity['cooldownEndsAt'] = zuuluu;
                michal = michal.subscription;
                entity['subscription'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot4;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot1;
        oscard = {};
        michal = 'isOnCooldown';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.cooldownEndsAt;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00006_ip = 81; continue _fun00005 }
 18:
                michal = global;
                report = michal.Date;
                oscard = zuuluu.cooldownEndsAt;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                golfie = tangon;
                zuuluu = new golfie[report](oscard, report);
                tangon = zuuluu instanceof Object ? zuuluu : tangon;
                zuuluu = tangon.getTime;
                zuuluu = zuuluu.bind(tangon)();
                tangon = michal.Date;
                michal = tangon.now;
                michal = michal.bind(tangon)();
                entity = zuuluu >= michal;
 81:
                return entity;
            }
        };
        oscard['value'] = michal;
        michal = new Array(2);
        michal[0] = oscard;
        oscard = {};
        golfie = 'isAvailable';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.premiumGuildSubscription;
                entity = null;
                entity = entity == michal;
                if(!entity) { _fun00008_ip = 31; continue _fun00007 }
 18:
                michal = zuuluu.isOnCooldown;
                michal = michal.bind(zuuluu)();
                entity = !michal;
 31:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'createFromServer';
        oscard['key'] = golfie;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = argFoo;
                zuuluu = _closure2_slot0;
                entity = {};
                tangon = michal.id;
                entity['id'] = tangon;
                tangon = michal.subscription_id;
                entity['subscriptionId'] = tangon;
                report = michal.premium_guild_subscription;
                tangon = null;
                report = tangon != report;
                if(!report) { _fun00010_ip = 82; continue _fun00009 }
 47:
                report = {};
                oscard = michal.premium_guild_subscription;
                oscard = oscard.id;
                report['id'] = oscard;
                oscard = michal.premium_guild_subscription;
                oscard = oscard.guild_id;
                report['guildId'] = oscard;
                tangon = report;
 82:
                entity['premiumGuildSubscription'] = tangon;
                tangon = michal.canceled;
                entity['canceled'] = tangon;
                michal = michal.cooldown_ends_at;
                entity['cooldownEndsAt'] = michal;
                michal = argBar;
                entity['subscription'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                option = michal;
                golfie = entity;
                entity = new option[zuuluu](golfie, oscard);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 6;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'records/GuildBoostSlotRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();