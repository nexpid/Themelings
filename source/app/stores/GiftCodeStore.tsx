// app/stores/GiftCodeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun69572: for(var _fun69572_ip = 0; ; ) switch(_fun69572_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot23;
            entity = entity.bind(zulu)();
            if(entity) { _fun69572_ip = 51; continue _fun69572 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun69572_ip = 92; continue _fun69572;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun69572_ip = 71; continue _fun69572 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun69573: for(var _fun69573_ip = 0; ; ) switch(_fun69573_ip) {
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
            _fun69573_ip = 76; continue _fun69573;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: updateGiftCode
        _fun69576: for(var _fun69576_ip = 0; ; ) switch(_fun69576_ip) {
 0:
            tango = _closure1_slot8;
            zulu = tango.createFromServer;
            mike = argFoo;
            oscar = zulu.bind(tango)(mike);
            tango = oscar.code;
            zulu = _closure1_slot13;
            mike = zulu.has;
            report = mike.bind(zulu)(tango);
            zulu = _closure1_slot13;
            mike = zulu.set;
            if(report) { _fun69576_ip = 137; continue _fun69576 }
 52:
            report = mike.bind(zulu)(tango, oscar);
            golf = oscar.expiresAt;
            report = null;
            if(!(report != golf)) { _fun69576_ip = 168; continue _fun69576 }
 70:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            report = 7;
            report = golf[report];
            golf = undefined;
            report = options.bind(golf)(report);
            report = report.Timeout;
            options = report.prototype;
            options = Object.create(options, {constructor: {value: report}});
            yankee = options;
            report = new yankee[report](offset);
            options = report instanceof Object ? report : options;
            report = _closure1_slot12;
            report[tango] = options;
            report = _closure1_slot25;
            report = report.bind(golf)(tango);
            _fun69576_ip = 168; continue _fun69576;
 137:
            report = _closure1_slot13;
            entity = report.get;
            report = entity.bind(report)(tango);
            entity = report.merge;
            entity = entity.bind(report)(oscar);
            entity = mike.bind(zulu)(tango, entity);
 168:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo) { // Original name: checkGiftCodeExpiry
        _fun69577: for(var _fun69577_ip = 0; ; ) switch(_fun69577_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = _closure1_slot13;
            mike = report.get;
            mike = mike.bind(report)(zulu);
            report = null;
            if(!(report != mike)) { _fun69577_ip = 201; continue _fun69577 }
 35:
            oscar = mike.expiresAt;
            if(!(report != oscar)) { _fun69577_ip = 201; continue _fun69577 }
 48:
            oscar = mike.expiresAt;
            mike = oscar.valueOf;
            golf = mike.bind(oscar)();
            options = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 8;
            oscar = oscar[mike];
            mike = undefined;
            oscar = options.bind(mike)(oscar);
            options = oscar.bind(mike)();
            oscar = options.valueOf;
            oscar = oscar.bind(options)();
            offset = golf - oscar;
            oscar = 0;
            if(!(!(offset <= oscar))) { _fun69577_ip = 165; continue _fun69577 }
 108:
            oscar = _closure1_slot12;
            golf = oscar[zulu];
            if(!(report != golf)) { _fun69577_ip = 163; continue _fun69577 }
 120:
            oscar = golf.start;
            report = global;
            verify = report.Math;
            options = verify.min;
            report = _closure1_slot11;
            report = options.bind(verify)(report, offset);
            tango = function() {
                zulu = _closure1_slot25;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            tango = oscar.bind(golf)(report, tango);
            _fun69577_ip = 201; continue _fun69577;
 163:
            return mike;
 165:
            tango = _closure1_slot13;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = _closure1_slot12;
            mike = delete mike[zulu];
            mike = _closure1_slot21;
            entity = mike.emitChange;
            entity = entity.bind(mike)();
 201:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo) { // Original name: resolveMessageGiftCodes
        _fun69579: for(var _fun69579_ip = 0; ; ) switch(_fun69579_ip) {
 0:
            oscar = argFoo;
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun69579_ip = 14; continue _fun69579 }
 12:
            entity = false;
 14:
            if(!entity) { _fun69579_ip = 46; continue _fun69579 }
 17:
            zulu = _closure1_slot20;
            mike = zulu.has;
            entity = oscar.channel_id;
            entity = mike.bind(zulu)(entity);
            if(entity) { _fun69579_ip = 46; continue _fun69579 }
 42:
            entity = false;
            return entity;
 46:
            zulu = _closure1_slot0;
            entity = _closure1_slot2;
            tango = 9;
            entity = entity[tango];
            zulu = zulu.bind(report)(entity);
            entity = zulu.isGiftCodeEmbed;
            entity = entity.bind(zulu)(oscar);
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[tango];
            tango = zulu.bind(report)(mike);
            mike = tango.findGiftCodes;
            if(entity) { _fun69579_ip = 118; continue _fun69579 }
 106:
            entity = oscar.content;
            zulu = mike.bind(tango)(entity);
            _fun69579_ip = 178; continue _fun69579;
 118:
            golf = null;
            options = golf == oscar;
            entity = undefined;
            if(options) { _fun69579_ip = 135; continue _fun69579 }
 129:
            entity = oscar.embeds;
 135:
            options = golf != entity;
            entity = undefined;
            if(!options) { _fun69579_ip = 173; continue _fun69579 }
 144:
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun69579_ip = 170; continue _fun69579 }
 153:
            golf = oscar.embeds;
            oscar = 0;
            oscar = golf[oscar];
            report = oscar.url;
 170:
            entity = report;
 173:
            zulu = mike.bind(tango)(entity);
 178:
            mike = zulu.length;
            entity = 0;
            if(!(entity !== mike)) { _fun69579_ip = 208; continue _fun69579 }
 189:
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun69580: for(var _fun69580_ip = 0; ; ) switch(_fun69580_ip) {
 0:
                    tango = argFoo;
                    var _closure3_slot0 = tango;
                    report = _closure1_slot14;
                    zulu = report.includes;
                    zulu = zulu.bind(report)(tango);
                    if(zulu) { _fun69580_ip = 43; continue _fun69580 }
 29:
                    oscar = _closure1_slot16;
                    report = oscar.includes;
                    zulu = report.bind(oscar)(tango);
 43:
                    if(zulu) { _fun69580_ip = 101; continue _fun69580 }
 46:
                    report = _closure1_slot27;
                    zulu = {};
                    zulu['code'] = tango;
                    tango = undefined;
                    zulu = report.bind(tango)(zulu);
                    zulu = _closure1_slot1;
                    report = _closure1_slot2;
                    mike = 10;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.wait;
                    entity = function() {
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        mike = 11;
                        zulu = zulu[mike];
                        mike = undefined;
                        oscar = tango.bind(mike)(zulu);
                        report = oscar.resolveGiftCode;
                        tango = _closure3_slot0;
                        zulu = false;
                        mike = true;
                        zulu = report.bind(oscar)(tango, zulu, mike);
                        mike = zulu.catch;
                        entity = _closure1_slot10;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
 101:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 208:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    romeo = function(argFoo) { // Original name: handleGiftCodeResolve
        _fun69582: for(var _fun69582_ip = 0; ; ) switch(_fun69582_ip) {
 0:
            entity = argFoo;
            zulu = entity.code;
            tango = _closure1_slot14;
            entity = tango.includes;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun69582_ip = 61; continue _fun69582 }
 28:
            golf = _closure1_slot14;
            entity = new Array(1);
            oscar = 0;
            options = entity;
            tango = arraySpread(options, golf, oscar);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            _closure1_slot14 = entity;
 61:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot27 = romeo;
    yankee = function(argFoo) { // Original name: handleMessage
        entity = argFoo;
        tango = entity.message;
        zulu = _closure1_slot26;
        mike = undefined;
        entity = true;
        entity = zulu.bind(mike)(tango, entity);
        entity = false;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleLoadMessages
        entity = argFoo;
        tango = entity.channelId;
        zulu = entity.messages;
        mike = _closure1_slot20;
        entity = mike.add;
        entity = entity.bind(mike)(tango);
        mike = zulu.forEach;
        entity = function(argFoo) {
            tango = _closure1_slot26;
            zulu = undefined;
            mike = argFoo;
            entity = true;
            entity = tango.bind(zulu)(mike, entity);
            entity = false;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    golf = function(argFoo) { // Original name: handleLoadThreadsSuccess
        _fun69586: for(var _fun69586_ip = 0; ; ) switch(_fun69586_ip) {
 0:
            entity = argFoo;
            zulu = entity.firstMessages;
            entity = null;
            if(!(entity != zulu)) { _fun69586_ip = 42; continue _fun69586 }
 15:
            if(!(entity != zulu)) { _fun69586_ip = 38; continue _fun69586 }
 19:
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot26;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                entity = false;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
 38:
            entity = undefined;
            return entity;
 42:
            entity = false;
            return entity;
        }
    };
    mike = global;
    backup = mike.Object;
    foxtrot = backup.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = foxtrot.bind(backup)(zulu, entity, verify);
    entity = 0;
    verify = oscar[entity];
    entity = undefined;
    verify = options.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 1;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 2;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = oscar[verify];
    verify = options.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscar[verify];
    verify = report.bind(entity)(verify);
    foxtrot = verify.AbortCodes;
    var _closure1_slot9 = foxtrot;
    verify = verify.NOOP_NULL;
    var _closure1_slot10 = verify;
    verify = 2147483647;
    var _closure1_slot11 = verify;
    verify = {};
    var _closure1_slot12 = verify;
    verify = mike.Map;
    foxtrot = verify.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: verify}});
    result = foxtrot;
    verify = new result[verify](output);
    verify = verify instanceof Object ? verify : foxtrot;
    var _closure1_slot13 = verify;
    verify = new Array(0);
    var _closure1_slot14 = verify;
    verify = new Array(0);
    var _closure1_slot15 = verify;
    verify = new Array(0);
    var _closure1_slot16 = verify;
    verify = mike.Set;
    foxtrot = verify.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: verify}});
    result = foxtrot;
    verify = new result[verify](output);
    verify = verify instanceof Object ? verify : foxtrot;
    var _closure1_slot17 = verify;
    verify = {};
    var _closure1_slot18 = verify;
    verify = {};
    var _closure1_slot19 = verify;
    mike = mike.Set;
    verify = mike.prototype;
    verify = Object.create(verify, {constructor: {value: mike}});
    result = verify;
    mike = new result[mike](output);
    mike = mike instanceof Object ? mike : verify;
    var _closure1_slot20 = mike;
    mike = 12;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    verify = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: GiftCodeStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot22;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'get';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun69590: for(var _fun69590_ip = 0; ; ) switch(_fun69590_ip) {
 0:
                zulu = _closure1_slot13;
                mike = zulu.get;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                tango = null;
                zulu = tango == mike;
                entity = null;
                if(zulu) { _fun69590_ip = 49; continue _fun69590 }
 31:
                zulu = mike.isExpired;
                zulu = zulu.bind(mike)();
                entity = null;
                if(zulu) { _fun69590_ip = 49; continue _fun69590 }
 46:
                entity = mike;
 49:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(11);
        entity[0] = report;
        report = {};
        golf = 'getError';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun69591: for(var _fun69591_ip = 0; ; ) switch(_fun69591_ip) {
 0:
                zulu = argFoo;
                entity = null;
                mike = entity != zulu;
                if(!mike) { _fun69591_ip = 23; continue _fun69591 }
 12:
                mike = _closure1_slot19;
                entity = mike[zulu];
 23:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getForGifterSKUAndPlan';
        report['key'] = golf;
        golf = function(argFoo, argBar, argBaz) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = argBaz;
            var _closure3_slot2 = mike;
            mike = global;
            tango = mike.Array;
            zulu = tango.from;
            report = _closure1_slot13;
            mike = report.values;
            mike = mike.bind(report)();
            zulu = zulu.bind(tango)(mike);
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun69593: for(var _fun69593_ip = 0; ; ) switch(_fun69593_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.userId;
                    entity = _closure3_slot0;
                    entity = mike === entity;
                    if(!entity) { _fun69593_ip = 36; continue _fun69593 }
 22:
                    report = zulu.skuId;
                    mike = _closure3_slot1;
                    entity = report === mike;
 36:
                    if(!entity) { _fun69593_ip = 69; continue _fun69593 }
 39:
                    report = _closure3_slot2;
                    mike = null;
                    mike = mike == report;
                    if(mike) { _fun69593_ip = 66; continue _fun69593 }
 52:
                    report = zulu.subscriptionPlanId;
                    tango = _closure3_slot2;
                    mike = report === tango;
 66:
                    entity = mike;
 69:
                    if(!entity) { _fun69593_ip = 85; continue _fun69593 }
 72:
                    mike = zulu.isExpired;
                    mike = mike.bind(zulu)();
                    entity = !mike;
 85:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getIsResolving';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot14;
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'getIsResolved';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot16;
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'getIsAccepting';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = _closure1_slot15;
            mike = zulu.includes;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'getUserGiftCodesFetchingForSKUAndPlan';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            zulu = _closure1_slot17;
            mike = zulu.has;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 9;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.makeComboId;
            tango = argFoo;
            entity = argBar;
            entity = report.bind(oscar)(tango, entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'getUserGiftCodesLoadedAtForSKUAndPlan';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            mike = _closure1_slot18;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 9;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.makeComboId;
            zulu = argFoo;
            entity = argBar;
            entity = tango.bind(report)(zulu, entity);
            entity = mike[entity];
            return entity;
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'getResolvingCodes';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'getResolvedCodes';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'getAcceptingCodes';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = oscar;
        entity[10] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(verify);
    mike = 'GiftCodeStore';
    verify['displayName'] = mike;
    mike = 10;
    mike = oscar[mike];
    output = options.bind(entity)(mike);
    mike = {};
    foxtrot = function() { // Original name: handleConnectionOpen
        mike = _closure1_slot20;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = false;
        return entity;
    };
    mike['CONNECTION_OPEN'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: handleChannelSelect
        _fun69603: for(var _fun69603_ip = 0; ; ) switch(_fun69603_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            entity = null;
            if(!(entity != zulu)) { _fun69603_ip = 31; continue _fun69603 }
 14:
            mike = _closure1_slot20;
            entity = mike.add;
            entity = entity.bind(mike)(zulu);
 31:
            entity = false;
            return entity;
        }
    };
    mike['CHANNEL_SELECT'] = foxtrot;
    mike['GIFT_CODE_RESOLVE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeResolveSuccess
        _fun69604: for(var _fun69604_ip = 0; ; ) switch(_fun69604_ip) {
 0:
            entity = argFoo;
            zulu = entity.giftCode;
            var _closure2_slot0 = zulu;
            report = _closure1_slot14;
            tango = report.filter;
            mike = function(argFoo) {
                entity = _closure2_slot0;
                mike = entity.code;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            mike = tango.bind(report)(mike);
            _closure1_slot14 = mike;
            report = _closure1_slot16;
            tango = report.includes;
            mike = zulu.code;
            mike = tango.bind(report)(mike);
            if(mike) { _fun69604_ip = 103; continue _fun69604 }
 65:
            golf = _closure1_slot16;
            mike = new Array(1);
            oscar = 0;
            options = mike;
            report = arraySpread(options, golf, oscar);
            tango = zulu.code;
            mike[report] = tango;
            tango = 1;
            tango = report + tango;
            _closure1_slot16 = mike;
 103:
            mike = _closure1_slot24;
            entity = undefined;
            mike = mike.bind(entity)(zulu);
            return entity;
        }
    };
    mike['GIFT_CODE_RESOLVE_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeResolveFailure
        _fun69606: for(var _fun69606_ip = 0; ; ) switch(_fun69606_ip) {
 0:
            mike = argFoo;
            zulu = mike.code;
            var _closure2_slot0 = zulu;
            report = _closure1_slot14;
            tango = report.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = tango.bind(report)(entity);
            _closure1_slot14 = entity;
            tango = _closure1_slot16;
            entity = tango.includes;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun69606_ip = 92; continue _fun69606 }
 59:
            golf = _closure1_slot16;
            entity = new Array(1);
            oscar = 0;
            options = entity;
            tango = arraySpread(options, golf, oscar);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            _closure1_slot16 = entity;
 92:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_RESOLVE_FAILURE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeAccept
        _fun69608: for(var _fun69608_ip = 0; ; ) switch(_fun69608_ip) {
 0:
            entity = argFoo;
            zulu = entity.code;
            tango = _closure1_slot15;
            entity = tango.includes;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun69608_ip = 61; continue _fun69608 }
 28:
            golf = _closure1_slot15;
            entity = new Array(1);
            oscar = 0;
            options = entity;
            tango = arraySpread(options, golf, oscar);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            _closure1_slot15 = entity;
 61:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_REDEEM'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeAcceptSuccess
        _fun69609: for(var _fun69609_ip = 0; ; ) switch(_fun69609_ip) {
 0:
            entity = argFoo;
            tango = entity.code;
            var _closure2_slot0 = tango;
            report = _closure1_slot15;
            zulu = report.filter;
            mike = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            mike = zulu.bind(report)(mike);
            _closure1_slot15 = mike;
            zulu = _closure1_slot13;
            mike = zulu.get;
            oscar = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike != oscar)) { _fun69609_ip = 115; continue _fun69609 }
 62:
            zulu = _closure1_slot13;
            mike = zulu.set;
            report = oscar.merge;
            entity = {};
            golf = true;
            entity['redeemed'] = golf;
            options = oscar.uses;
            golf = 1;
            golf = options + golf;
            entity['uses'] = golf;
            entity = report.bind(oscar)(entity);
            entity = mike.bind(zulu)(tango, entity);
 115:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_REDEEM_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeAcceptFailure
        _fun69611: for(var _fun69611_ip = 0; ; ) switch(_fun69611_ip) {
 0:
            entity = argFoo;
            tango = entity.code;
            var _closure2_slot0 = tango;
            mike = entity.error;
            oscar = _closure1_slot15;
            report = oscar.filter;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            zulu = report.bind(oscar)(zulu);
            _closure1_slot15 = zulu;
            report = _closure1_slot13;
            zulu = report.get;
            golf = zulu.bind(report)(tango);
            zulu = _closure1_slot19;
            zulu[tango] = mike;
            zulu = null;
            if(!(zulu != golf)) { _fun69611_ip = 178; continue _fun69611 }
 75:
            zulu = mike.code;
            mike = _closure1_slot9;
            mike = mike.UNKNOWN_GIFT_CODE;
            if(!(mike !== zulu)) { _fun69611_ip = 146; continue _fun69611 }
 94:
            mike = _closure1_slot9;
            mike = mike.INVALID_GIFT_REDEMPTION_EXHAUSTED;
            if(!(mike === zulu)) { _fun69611_ip = 178; continue _fun69611 }
 108:
            report = _closure1_slot13;
            zulu = report.set;
            options = golf.set;
            oscar = golf.maxUses;
            mike = 'uses';
            mike = options.bind(golf)(mike, oscar);
            mike = zulu.bind(report)(tango, mike);
            _fun69611_ip = 178; continue _fun69611;
 146:
            zulu = _closure1_slot13;
            mike = zulu.set;
            oscar = golf.set;
            report = 'revoked';
            entity = true;
            entity = oscar.bind(golf)(report, entity);
            entity = mike.bind(zulu)(tango, entity);
 178:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_REDEEM_FAILURE'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeRevoke
        _fun69613: for(var _fun69613_ip = 0; ; ) switch(_fun69613_ip) {
 0:
            entity = argFoo;
            zulu = entity.code;
            tango = _closure1_slot13;
            entity = tango.delete;
            entity = entity.bind(tango)(zulu);
            entity = _closure1_slot12;
            tango = entity[zulu];
            entity = null;
            if(!(entity != tango)) { _fun69613_ip = 57; continue _fun69613 }
 39:
            entity = tango.stop;
            entity = entity.bind(tango)();
            entity = _closure1_slot12;
            entity = delete entity[zulu];
 57:
            tango = _closure1_slot16;
            entity = tango.includes;
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun69613_ip = 107; continue _fun69613 }
 74:
            golf = _closure1_slot16;
            entity = new Array(1);
            oscar = 0;
            options = entity;
            tango = arraySpread(options, golf, oscar);
            entity[tango] = zulu;
            zulu = 1;
            zulu = tango + zulu;
            _closure1_slot16 = entity;
 107:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_REVOKE_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodeCreate
        entity = argFoo;
        zulu = entity.giftCode;
        mike = _closure1_slot24;
        entity = undefined;
        mike = mike.bind(entity)(zulu);
        return entity;
    };
    mike['GIFT_CODE_CREATE_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodesFetch
        entity = argFoo;
        golf = entity.skuId;
        oscar = entity.subscriptionPlanId;
        tango = _closure1_slot17;
        zulu = tango.add;
        report = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        report = report.bind(entity)(mike);
        mike = report.makeComboId;
        mike = mike.bind(report)(golf, oscar);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['GIFT_CODES_FETCH'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodesFetchSuccess
        entity = argFoo;
        tango = entity.giftCodes;
        oscar = entity.skuId;
        report = entity.subscriptionPlanId;
        zulu = tango.forEach;
        entity = _closure1_slot24;
        entity = zulu.bind(tango)(entity);
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.makeComboId;
        tango = zulu.bind(tango)(oscar, report);
        report = _closure1_slot18;
        zulu = global;
        oscar = zulu.Date;
        zulu = oscar.now;
        zulu = zulu.bind(oscar)();
        report[tango] = zulu;
        zulu = _closure1_slot17;
        mike = zulu.delete;
        mike = mike.bind(zulu)(tango);
        return entity;
    };
    mike['GIFT_CODES_FETCH_SUCCESS'] = romeo;
    romeo = function(argFoo) { // Original name: handleGiftCodesFetchFail
        entity = argFoo;
        golf = entity.skuId;
        oscar = entity.subscriptionPlanId;
        tango = _closure1_slot17;
        zulu = tango.delete;
        report = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 9;
        mike = mike[entity];
        entity = undefined;
        report = report.bind(entity)(mike);
        mike = report.makeComboId;
        mike = mike.bind(report)(golf, oscar);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['GIFT_CODES_FETCH_FAILURE'] = romeo;
    mike['MESSAGE_CREATE'] = yankee;
    mike['MESSAGE_UPDATE'] = yankee;
    mike['LOCAL_MESSAGES_LOADED'] = offset;
    mike['LOAD_MESSAGES_SUCCESS'] = offset;
    mike['LOAD_MESSAGES_AROUND_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleLoadRecentMentions
        entity = argFoo;
        zulu = entity.messages;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot26;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = false;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['LOAD_RECENT_MENTIONS_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleLoadPinnedMessages
        entity = argFoo;
        zulu = entity.messages;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = _closure1_slot26;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            entity = false;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['LOAD_PINNED_MESSAGES_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchFinish
        entity = argFoo;
        zulu = entity.messages;
        mike = zulu.forEach;
        entity = function(argFoo) {
            zulu = argFoo;
            mike = zulu.forEach;
            entity = function(argFoo) {
                zulu = _closure1_slot26;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                entity = false;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['SEARCH_FINISH'] = offset;
    offset = function(argFoo) { // Original name: handleGiftCodeUpdate
        _fun69625: for(var _fun69625_ip = 0; ; ) switch(_fun69625_ip) {
 0:
            entity = argFoo;
            verify = entity.uses;
            tango = entity.code;
            zulu = _closure1_slot13;
            mike = zulu.get;
            golf = mike.bind(zulu)(tango);
            mike = null;
            if(!(mike != golf)) { _fun69625_ip = 92; continue _fun69625 }
 37:
            zulu = _closure1_slot13;
            mike = zulu.set;
            oscar = golf.set;
            entity = global;
            options = entity.Math;
            report = options.max;
            entity = golf.uses;
            report = report.bind(options)(entity, verify);
            entity = 'uses';
            entity = oscar.bind(golf)(entity, report);
            entity = mike.bind(zulu)(tango, entity);
 92:
            entity = undefined;
            return entity;
        }
    };
    mike['GIFT_CODE_UPDATE'] = offset;
    mike['LOAD_THREADS_SUCCESS'] = golf;
    mike['LOAD_ARCHIVED_THREADS_SUCCESS'] = golf;
    golf = function(argFoo) { // Original name: handleLoadForumPosts
        entity = argFoo;
        zulu = entity.threads;
        entity = global;
        mike = entity.Object;
        entity = mike.values;
        zulu = entity.bind(mike)(zulu);
        mike = zulu.map;
        entity = function(argFoo) {
            _fun69627: for(var _fun69627_ip = 0; ; ) switch(_fun69627_ip) {
 0:
                entity = argFoo;
                tango = entity.first_message;
                entity = null;
                entity = entity != tango;
                if(!entity) { _fun69627_ip = 34; continue _fun69627 }
 18:
                zulu = _closure1_slot26;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                entity = false;
 34:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        entity = undefined;
        return entity;
    };
    mike['LOAD_FORUM_POSTS'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    result = golf;
    sizing = mike;
    mike = new result[verify](output, sizing, kilo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot21 = mike;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/GiftCodeStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();