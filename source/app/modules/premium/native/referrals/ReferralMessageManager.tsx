// app/modules/premium/native/referrals/ReferralMessageManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: handleReferralMessages
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = argFoo;
            report = zulu.type;
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 8;
            tango = tango[entity];
            entity = undefined;
            tango = oscar.bind(entity)(tango);
            tango = tango.MessageTypes;
            tango = tango.PREMIUM_REFERRAL;
            if(!(report === tango)) { _fun00006_ip = 309; continue _fun00005 }
 52:
            tango = zulu.content;
            report = null;
            if(!(report != tango)) { _fun00006_ip = 309; continue _fun00005 }
 66:
            oscar = _closure1_slot1;
            tango = _closure1_slot2;
            options = 9;
            tango = tango[options];
            golf = oscar.bind(entity)(tango);
            oscar = golf.isProbablyAValidSnowflake;
            tango = zulu.content;
            tango = oscar.bind(golf)(tango);
            if(!tango) { _fun00006_ip = 309; continue _fun00005 }
 108:
            oscar = _closure1_slot8;
            tango = oscar.getPremiumTypeSubscription;
            tango = tango.bind(oscar)();
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[options];
            golf = golf.bind(entity)(oscar);
            oscar = golf.extractTimestamp;
            zulu = zulu.content;
            golf = oscar.bind(golf)(zulu);
            oscar = _closure1_slot9;
            zulu = oscar.shouldFetchReferralOffer;
            zulu = zulu.bind(oscar)(golf);
            if(!(report == tango)) { _fun00006_ip = 309; continue _fun00005 }
 179:
            if(!zulu) { _fun00006_ip = 309; continue _fun00005 }
 185:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            report = 10;
            zulu = zulu[report];
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00006_ip = 261; continue _fun00005 }
 217:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[report];
            tango = tango.bind(entity)(zulu);
            zulu = tango.isIOS;
            zulu = zulu.bind(tango)();
            report = undefined;
            if(!zulu) { _fun00006_ip = 271; continue _fun00005 }
 249:
            zulu = _closure1_slot10;
            report = zulu.APPLE;
            _fun00006_ip = 271; continue _fun00005;
 261:
            zulu = _closure1_slot10;
            report = zulu.GOOGLE;
 271:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 11;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.fetchUserOffer;
            mike = 'Referral Message Manager';
            mike = zulu.bind(tango)(mike, report);
 309:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PaymentGateways;
    var _closure1_slot10 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function() { // Original name: ReferralMessageManager
            report = this;
            entity = _closure1_slot4;
            zulu = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(report, zulu);
            entity = _closure1_slot11;
            entity = entity.bind(tango)(report, zulu);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 12;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            mike = _closure1_slot13;
            mike = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/native/referrals/ReferralMessageManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();