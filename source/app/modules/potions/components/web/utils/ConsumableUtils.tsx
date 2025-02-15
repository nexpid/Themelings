// app/modules/potions/components/web/utils/ConsumableUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot25;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot25;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    tango = function(argFoo, argBar) { // Original name: useHDPotionTrigger
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBar;
            var _closure2_slot0 = oscar;
            golf = _closure1_slot6;
            entity = undefined;
            report = true;
            report = golf.bind(entity)(report);
            var _closure2_slot1 = report;
            report = null;
            golf = report == tango;
            report = undefined;
            if(golf) { _fun00008_ip = 49; continue _fun00007 }
 43:
            report = tango.hdStreamingUntil;
 49:
            var _closure2_slot2 = report;
            tango = _closure1_slot6;
            tango = tango.bind(entity)(oscar);
            var _closure2_slot3 = tango;
            oscar = _closure1_slot4;
            tango = function() {
                mike = _closure2_slot3;
                entity = _closure2_slot0;
                mike['current'] = entity;
                entity = undefined;
                return entity;
            };
            tango = oscar.bind(entity)(tango);
            tango = _closure1_slot4;
            zulu = new Array(1);
            zulu[0] = report;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure2_slot1;
                    mike = mike.current;
                    if(mike) { _fun00010_ip = 112; continue _fun00009 }
 15:
                    zulu = _closure2_slot2;
                    mike = null;
                    zulu = mike != zulu;
                    mike = undefined;
                    if(!zulu) { _fun00010_ip = 110; continue _fun00009 }
 30:
                    zulu = global;
                    golf = zulu.Date;
                    options = _closure2_slot2;
                    oscar = golf.prototype;
                    oscar = Object.create(oscar, {constructor: {value: golf}});
                    verify = oscar;
                    report = new verify[golf](options, golf);
                    report = report instanceof Object ? report : oscar;
                    zulu = zulu.Date;
                    oscar = zulu.prototype;
                    oscar = Object.create(oscar, {constructor: {value: zulu}});
                    verify = oscar;
                    zulu = new verify[zulu](options);
                    zulu = zulu instanceof Object ? zulu : oscar;
                    zulu = report > zulu;
                    mike = undefined;
                    if(!zulu) { _fun00010_ip = 110; continue _fun00009 }
 97:
                    tango = _closure2_slot3;
                    zulu = tango.current;
                    mike = zulu.bind(tango)();
 110:
                    return mike;
 112:
                    mike = _closure2_slot1;
                    entity = false;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        }
    };
    var _closure1_slot26 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = options[report];
    report = golf.bind(entity)(report);
    verify = report.useEffect;
    var _closure1_slot4 = verify;
    verify = report.useMemo;
    var _closure1_slot5 = verify;
    verify = report.useRef;
    var _closure1_slot6 = verify;
    report = report.useState;
    var _closure1_slot7 = report;
    report = 2;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 3;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 4;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 5;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 6;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 7;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 8;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot14 = report;
    report = 9;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot15 = report;
    report = 10;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot16 = report;
    report = 11;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.AnalyticEvents;
    var _closure1_slot17 = oscar;
    oscar = report.BoostedGuildTiers;
    var _closure1_slot18 = oscar;
    report = report.ChannelTypes;
    var _closure1_slot19 = report;
    report = 12;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.ApplicationStreamFPS;
    var _closure1_slot20 = oscar;
    report = report.ApplicationStreamResolutions;
    var _closure1_slot21 = report;
    report = 13;
    report = options[report];
    report = golf.bind(entity)(report);
    verify = report.Logger;
    report = verify.prototype;
    oscar = Object.create(report, {constructor: {value: verify}});
    foxtrot = 'HDStreamingConsumableModal';
    backup = oscar;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot22 = report;
    report = function(argFoo) { // Original name: useIsChannelEligibleForHDPotion
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            options = 14;
            mike = yankee[options];
            report = undefined;
            golf = offset.bind(report)(mike);
            oscar = golf.useStateFromStores;
            mike = _closure1_slot10;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00014_ip = 39; continue _fun00013 }
 30:
                    tango = _closure2_slot0;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            oscar = oscar.bind(golf)(zulu, mike);
            mike = yankee[options];
            verify = offset.bind(report)(mike);
            golf = verify.useStateFromStores;
            mike = _closure1_slot14;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = _closure1_slot14;
                    entity = mike.getCurrentUser;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00016_ip = 32; continue _fun00015 }
 27:
                    entity = mike.id;
 32:
                    return entity;
                }
            };
            mike = golf.bind(verify)(zulu, mike);
            var _closure2_slot1 = mike;
            mike = yankee[options];
            verify = offset.bind(report)(mike);
            golf = verify.useStateFromStoresArray;
            mike = _closure1_slot9;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00018_ip = 61; continue _fun00017 }
 13:
                    zulu = _closure1_slot9;
                    mike = zulu.getAllActiveStreamsForChannel;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.ownerId;
                        entity = _closure2_slot1;
                        entity = mike !== entity;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun00018_ip = 65; continue _fun00017;
 61:
                    entity = new Array(0);
 65:
                    return entity;
                }
            };
            zulu = golf.bind(verify)(zulu, mike);
            var _closure2_slot2 = zulu;
            golf = zulu.some;
            mike = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tango = _closure1_slot14;
                    mike = tango.getUser;
                    entity = argFoo;
                    entity = entity.ownerId;
                    mike = mike.bind(tango)(entity);
                    entity = null;
                    entity = entity != mike;
                    if(!entity) { _fun00020_ip = 56; continue _fun00019 }
 36:
                    tango = _closure1_slot12;
                    zulu = tango.isMobileOnline;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 56:
                    return entity;
                }
            };
            mike = golf.bind(zulu)(mike);
            output = _closure1_slot7;
            golf = null;
            verify = output.bind(report)(golf);
            sizing = _closure1_slot3;
            kilo = 2;
            romeo = sizing.bind(report)(verify, kilo);
            verify = 0;
            foxtrot = romeo[verify];
            var _closure2_slot3 = foxtrot;
            backup = 1;
            romeo = romeo[backup];
            var _closure2_slot4 = romeo;
            romeo = new Array(0);
            romeo = output.bind(report)(romeo);
            romeo = sizing.bind(report)(romeo, kilo);
            verify = romeo[verify];
            var _closure2_slot5 = verify;
            romeo = romeo[backup];
            var _closure2_slot6 = romeo;
            options = yankee[options];
            romeo = offset.bind(report)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot13;
            offset = new Array(1);
            offset[0] = options;
            options = new Array(2);
            options[0] = foxtrot;
            options[1] = zulu;
            zulu = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun00022_ip = 48; continue _fun00021 }
 13:
                    mike = global;
                    zulu = mike.Date;
                    mike = zulu.now;
                    zulu = mike.bind(zulu)();
                    mike = _closure2_slot3;
                    zulu = zulu - mike;
                    mike = 10000;
                    if(!(zulu > mike)) { _fun00022_ip = 133; continue _fun00021 }
 48:
                    tango = _closure2_slot2;
                    zulu = tango.map;
                    mike = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            zulu = _closure1_slot0;
                            tango = _closure1_slot2;
                            mike = 15;
                            mike = tango[mike];
                            tango = undefined;
                            report = zulu.bind(tango)(mike);
                            zulu = report.encodeStreamKey;
                            mike = argFoo;
                            zulu = zulu.bind(report)(mike);
                            mike = _closure1_slot13;
                            entity = mike.getRTCConnection;
                            report = entity.bind(mike)(zulu);
                            zulu = null;
                            mike = zulu == report;
                            entity = undefined;
                            if(mike) { _fun00024_ip = 90; continue _fun00023 }
 65:
                            mike = report.getVideoStats;
                            mike = mike.bind(report)();
                            zulu = zulu == mike;
                            entity = undefined;
                            if(zulu) { _fun00024_ip = 90; continue _fun00023 }
 84:
                            entity = mike.inbound_bitrate_estimate_percentile99;
 90:
                            return entity;
                        }
                    };
                    tango = zulu.bind(tango)(mike);
                    report = _closure1_slot22;
                    zulu = report.info;
                    mike = 'Setting bitrates';
                    mike = zulu.bind(report)(mike, tango);
                    mike = _closure2_slot6;
                    zulu = undefined;
                    mike = mike.bind(zulu)(tango);
                    mike = _closure2_slot4;
                    entity = global;
                    tango = entity.Date;
                    entity = tango.now;
                    entity = entity.bind(tango)();
                    entity = mike.bind(zulu)(entity);
 133:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = yankee.bind(romeo)(offset, zulu, options);
            options = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = verify;
            entity = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot5;
                    zulu = entity.length;
                    entity = 0;
                    entity = entity === zulu;
                    if(entity) { _fun00026_ip = 48; continue _fun00025 }
 21:
                    tango = _closure2_slot5;
                    zulu = tango.some;
                    mike = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            zulu = argFoo;
                            entity = null;
                            entity = entity == zulu;
                            if(entity) { _fun00028_ip = 22; continue _fun00027 }
 12:
                            mike = 3500000;
                            entity = zulu < mike;
 22:
                            return entity;
                        }
                    };
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 48:
                    return entity;
                }
            };
            zulu = options.bind(report)(entity, zulu);
            entity = golf == oscar;
            options = undefined;
            if(entity) { _fun00012_ip = 337; continue _fun00011 }
 331:
            options = oscar.premiumTier;
 337:
            entity = _closure1_slot18;
            entity = entity.NONE;
            entity = options === entity;
            if(entity) { _fun00012_ip = 383; continue _fun00011 }
 354:
            golf = golf == oscar;
            report = undefined;
            if(golf) { _fun00012_ip = 369; continue _fun00011 }
 363:
            report = oscar.premiumTier;
 369:
            tango = _closure1_slot18;
            tango = tango.TIER_1;
            entity = report === tango;
 383:
            if(!entity) { _fun00012_ip = 389; continue _fun00011 }
 386:
            entity = zulu;
 389:
            if(!entity) { _fun00012_ip = 395; continue _fun00011 }
 392:
            entity = !mike;
 395:
            return entity;
        }
    };
    var _closure1_slot23 = report;
    oscar = 23;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/potions/components/web/utils/ConsumableUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['useIsChannelEligibleForHDPotion'] = report;
    report = function(argFoo, argBar) {
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 14;
            options = golf[mike];
            tango = undefined;
            yankee = oscar.bind(tango)(options);
            offset = yankee.useStateFromStores;
            options = _closure1_slot14;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    mike = _closure1_slot14;
                    entity = mike.getCurrentUser;
                    mike = entity.bind(mike)();
                    entity = null;
                    zulu = entity == mike;
                    entity = undefined;
                    if(zulu) { _fun00032_ip = 32; continue _fun00031 }
 27:
                    entity = mike.id;
 32:
                    return entity;
                }
            };
            options = offset.bind(yankee)(verify, options);
            var _closure2_slot1 = options;
            mike = golf[mike];
            verify = oscar.bind(tango)(mike);
            options = verify.useStateFromStoresArray;
            offset = _closure1_slot9;
            mike = new Array(1);
            mike[0] = offset;
            entity = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun00034_ip = 61; continue _fun00033 }
 13:
                    zulu = _closure1_slot9;
                    mike = zulu.getAllActiveStreamsForChannel;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    zulu = mike.bind(zulu)(entity);
                    mike = zulu.filter;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.ownerId;
                        entity = _closure2_slot1;
                        entity = mike !== entity;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun00034_ip = 65; continue _fun00033;
 61:
                    entity = new Array(0);
 65:
                    return entity;
                }
            };
            mike = options.bind(verify)(mike, entity);
            entity = 16;
            entity = golf[entity];
            golf = oscar.bind(tango)(entity);
            oscar = golf.useConsumableHDStreamingEnabled;
            entity = argBar;
            entity = oscar.bind(golf)(entity);
            zulu = _closure1_slot23;
            zulu = zulu.bind(tango)(report);
            if(!entity) { _fun00030_ip = 149; continue _fun00029 }
 146:
            entity = zulu;
 149:
            if(!entity) { _fun00030_ip = 163; continue _fun00029 }
 152:
            zulu = mike.length;
            mike = 0;
            entity = zulu > mike;
 163:
            return entity;
        }
    };
    zulu['useShouldShowHDPotionUpsell'] = report;
    report = function(argFoo) { // Original name: useConsumableFetchSkuPrice
        options = argFoo;
        var _closure2_slot0 = options;
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 14;
        mike = tango[mike];
        golf = undefined;
        oscar = zulu.bind(golf)(mike);
        tango = oscar.useStateFromStoresArray;
        mike = _closure1_slot16;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            tango = _closure1_slot16;
            entity = tango.isFetchingPrice;
            zulu = _closure2_slot0;
            mike = entity.bind(tango)(zulu);
            entity = new Array(3);
            entity[0] = mike;
            mike = tango.getPrice;
            mike = mike.bind(tango)(zulu);
            entity[1] = mike;
            mike = tango.getErrored;
            mike = mike.bind(tango)(zulu);
            entity[2] = mike;
            return entity;
        };
        tango = tango.bind(oscar)(zulu, mike);
        zulu = _closure1_slot3;
        mike = 3;
        oscar = zulu.bind(golf)(tango, mike);
        mike = 0;
        zulu = oscar[mike];
        var _closure2_slot1 = zulu;
        mike = 1;
        tango = oscar[mike];
        var _closure2_slot2 = tango;
        mike = 2;
        mike = oscar[mike];
        var _closure2_slot3 = mike;
        oscar = _closure1_slot4;
        report = new Array(4);
        report[0] = zulu;
        report[1] = tango;
        report[2] = mike;
        report[3] = options;
        entity = function() {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun00036_ip = 20; continue _fun00035 }
 10:
                tango = _closure2_slot2;
                zulu = null;
                mike = zulu != tango;
 20:
                if(mike) { _fun00036_ip = 27; continue _fun00035 }
 23:
                mike = _closure2_slot3;
 27:
                if(mike) { _fun00036_ip = 70; continue _fun00035 }
 30:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.fetchConsumablePrice;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
 70:
                entity = undefined;
                return entity;
            }
        };
        entity = oscar.bind(golf)(entity, report);
        entity = {};
        entity['price'] = tango;
        entity['fetchingPrice'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useConsumableFetchSkuPrice'] = report;
    report = function(argFoo) { // Original name: useConsumableFetchUnconsumedEntitlement
        verify = argFoo;
        var _closure2_slot0 = verify;
        zulu = _closure1_slot0;
        tango = _closure1_slot2;
        mike = 14;
        mike = tango[mike];
        options = undefined;
        report = zulu.bind(options)(mike);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot16;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            tango = _closure1_slot16;
            entity = tango.isEntitlementFetched;
            zulu = _closure2_slot0;
            mike = entity.bind(tango)(zulu);
            entity = new Array(5);
            entity[0] = mike;
            mike = tango.fetchPotionCount;
            mike = mike.bind(tango)(zulu);
            entity[1] = mike;
            mike = tango.isEntitlementFetching;
            mike = mike.bind(tango)(zulu);
            entity[2] = mike;
            mike = tango.getEntitlement;
            mike = mike.bind(tango)(zulu);
            entity[3] = mike;
            mike = tango.getErrored;
            mike = mike.bind(tango)(zulu);
            entity[4] = mike;
            return entity;
        };
        tango = tango.bind(report)(zulu, mike);
        zulu = _closure1_slot3;
        mike = 5;
        golf = zulu.bind(options)(tango, mike);
        mike = 0;
        zulu = golf[mike];
        var _closure2_slot1 = zulu;
        mike = 1;
        tango = golf[mike];
        mike = 2;
        offset = golf[mike];
        var _closure2_slot2 = offset;
        mike = 3;
        report = golf[mike];
        mike = 4;
        mike = golf[mike];
        golf = _closure1_slot4;
        oscar = new Array(3);
        oscar[0] = zulu;
        oscar[1] = offset;
        oscar[2] = verify;
        entity = function() {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun00038_ip = 14; continue _fun00037 }
 10:
                mike = _closure2_slot2;
 14:
                if(mike) { _fun00038_ip = 57; continue _fun00037 }
 17:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.fetchConsumableEntitlement;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
 57:
                entity = undefined;
                return entity;
            }
        };
        entity = golf.bind(options)(entity, oscar);
        entity = {};
        entity['entitlement'] = report;
        entity['numPotions'] = tango;
        entity['fetchedEntitlement'] = zulu;
        entity['error'] = mike;
        return entity;
    };
    zulu['useConsumableFetchUnconsumedEntitlement'] = report;
    zulu['useHDPotionTrigger'] = tango;
    tango = function(argFoo) { // Original name: useUpgradeOnHDPotionTrigger
        tango = argFoo;
        var _closure2_slot0 = tango;
        zulu = _closure1_slot26;
        entity = undefined;
        mike = function() {
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zulu = _closure1_slot9;
                mike = zulu.getCurrentUserActiveStream;
                zulu = mike.bind(zulu)();
                mike = null;
                if(!(mike != zulu)) { _fun00040_ip = 198; continue _fun00039 }
 26:
                tango = zulu.channelId;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                if(!(tango === zulu)) { _fun00040_ip = 198; continue _fun00039 }
 50:
                tango = _closure1_slot11;
                zulu = tango.getState;
                zulu = zulu.bind(tango)();
                options = zulu.goLiveSource;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 17;
                zulu = tango[zulu];
                tango = undefined;
                report = report.bind(tango)(zulu);
                zulu = report.savePreviousGoLiveSettings;
                oscar = mike == options;
                mike = undefined;
                if(oscar) { _fun00040_ip = 113; continue _fun00039 }
 107:
                mike = options.quality;
 113:
                mike = zulu.bind(report)(mike);
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 18;
                mike = report[mike];
                golf = zulu.bind(tango)(mike);
                oscar = golf.constructGoLiveSource;
                mike = _closure1_slot21;
                zulu = mike.RESOLUTION_1440;
                mike = _closure1_slot20;
                mike = mike.FPS_60;
                zulu = oscar.bind(golf)(zulu, mike, options);
                mike = _closure1_slot1;
                entity = 19;
                entity = report[entity];
                mike = mike.bind(tango)(entity);
                entity = mike.setGoLiveSource;
                entity = entity.bind(mike)(zulu);
 198:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(entity)(tango, mike);
        return entity;
    };
    zulu['useUpgradeOnHDPotionTrigger'] = tango;
    tango = function() { // Original name: useSkipHDPotionAnimation
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 20;
            zulu = report[zulu];
            golf = undefined;
            zulu = tango.bind(golf)(zulu);
            zulu = zulu.name;
            tango = null;
            report = tango != zulu;
            tango = 'unknown';
            if(!report) { _fun00042_ip = 48; continue _fun00041 }
 45:
            tango = zulu;
 48:
            zulu = tango.toLowerCase;
            tango = zulu.bind(tango)();
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 14;
            zulu = options[report];
            yankee = oscar.bind(golf)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot15;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                mike = _closure1_slot15;
                entity = mike.isFocused;
                entity = entity.bind(mike)();
                return entity;
            };
            zulu = offset.bind(yankee)(verify, zulu);
            report = options[report];
            oscar = oscar.bind(golf)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot8;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                entity = _closure1_slot8;
                entity = entity.useReducedMotion;
                return entity;
            };
            mike = report.bind(oscar)(mike, entity);
            entity = 'safari';
            entity = entity === tango;
            if(entity) { _fun00042_ip = 163; continue _fun00041 }
 160:
            entity = !zulu;
 163:
            if(entity) { _fun00042_ip = 169; continue _fun00041 }
 166:
            entity = mike;
 169:
            return entity;
        }
    };
    zulu['useSkipHDPotionAnimation'] = tango;
    tango = function(argFoo) { // Original name: trackHDStreamingModalOpened
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 21;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot17;
        zulu = mike.CONSUMABLE_HD_STREAMING_ENTRYPOINT;
        mike = {};
        oscar = argFoo;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackHDStreamingModalOpened'] = tango;
    tango = function(argFoo) { // Original name: useShowPotionIcon
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            oscar = 14;
            golf = zulu[oscar];
            oscar = undefined;
            verify = mike.bind(oscar)(golf);
            options = verify.useStateFromStores;
            offset = _closure1_slot10;
            golf = new Array(1);
            golf[0] = offset;
            entity = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    zulu = _closure1_slot10;
                    mike = zulu.getGuild;
                    report = _closure2_slot0;
                    entity = null;
                    report = entity == report;
                    entity = undefined;
                    if(report) { _fun00046_ip = 39; continue _fun00045 }
 30:
                    tango = _closure2_slot0;
                    entity = tango.guild_id;
 39:
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            golf = options.bind(verify)(golf, entity);
            entity = 16;
            entity = zulu[entity];
            zulu = mike.bind(oscar)(entity);
            mike = zulu.useConsumableHDStreamingEnabled;
            entity = 'VoiceEffectsActionBar';
            mike = mike.bind(zulu)(entity);
            zulu = null;
            entity = zulu == golf;
            options = undefined;
            if(entity) { _fun00044_ip = 110; continue _fun00043 }
 104:
            options = golf.premiumTier;
 110:
            entity = _closure1_slot18;
            entity = entity.NONE;
            entity = options === entity;
            if(entity) { _fun00044_ip = 156; continue _fun00043 }
 127:
            verify = zulu == golf;
            options = undefined;
            if(verify) { _fun00044_ip = 142; continue _fun00043 }
 136:
            options = golf.premiumTier;
 142:
            golf = _closure1_slot18;
            golf = golf.TIER_1;
            entity = options === golf;
 156:
            if(!entity) { _fun00044_ip = 187; continue _fun00043 }
 159:
            golf = zulu == tango;
            oscar = undefined;
            if(golf) { _fun00044_ip = 173; continue _fun00043 }
 168:
            oscar = tango.type;
 173:
            report = _closure1_slot19;
            report = report.GUILD_VOICE;
            entity = oscar === report;
 187:
            if(!entity) { _fun00044_ip = 208; continue _fun00043 }
 190:
            zulu = zulu != tango;
            if(!zulu) { _fun00044_ip = 205; continue _fun00043 }
 197:
            zulu = tango.isHDStreamSplashed;
 205:
            entity = !zulu;
 208:
            if(!entity) { _fun00044_ip = 214; continue _fun00043 }
 211:
            entity = mike;
 214:
            return entity;
        }
    };
    zulu['useShowPotionIcon'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: canAddConfettiToMessageOnSend
        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
            report = argCorge;
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun00048_ip = 65; continue _fun00047 }
 12:
            tango = null;
            mike = argBaz;
            mike = tango == mike;
            if(!mike) { _fun00048_ip = 62; continue _fun00047 }
 24:
            oscar = '';
            zulu = argFoo;
            zulu = oscar !== zulu;
            if(zulu) { _fun00048_ip = 59; continue _fun00047 }
 38:
            tango = tango != report;
            if(!tango) { _fun00048_ip = 56; continue _fun00047 }
 45:
            oscar = report.length;
            report = 0;
            tango = oscar > report;
 56:
            zulu = tango;
 59:
            mike = zulu;
 62:
            entity = mike;
 65:
            return entity;
        }
    };
    zulu['canAddConfettiToMessageOnSend'] = tango;
    tango = function(argFoo) { // Original name: constructCreateConfettiPotionRequest
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            zulu = argFoo;
            entity = null;
            if(!(entity == zulu)) { _fun00050_ip = 13; continue _fun00049 }
 9:
            entity = undefined;
            return entity;
 13:
            entity = {};
            mike = {};
            tango = zulu.emoji;
            tango = tango.id;
            mike['id'] = tango;
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 17;
            report = report[tango];
            tango = undefined;
            report = oscar.bind(tango)(report);
            tango = report.convertEmojiToEmojiName;
            zulu = zulu.emoji;
            zulu = tango.bind(report)(zulu);
            mike['name'] = zulu;
            entity['message_emoji'] = mike;
            return entity;
        }
    };
    zulu['constructCreateConfettiPotionRequest'] = tango;
    mike = function(argFoo) { // Original name: getSentConfettiPotionEmoji
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            mike = argFoo;
            entity = null;
            if(!(entity != mike)) { _fun00052_ip = 250; continue _fun00051 }
 12:
            zulu = mike.potions;
            if(!(entity != zulu)) { _fun00052_ip = 248; continue _fun00051 }
 25:
            zulu = mike.potions;
            tango = zulu.length;
            zulu = 0;
            if(!(zulu !== tango)) { _fun00052_ip = 246; continue _fun00051 }
 45:
            tango = _closure1_slot24;
            mike = mike.potions;
            offset = undefined;
            verify = tango.bind(offset)(mike);
            tango = verify.bind(offset)();
            mike = tango.done;
            options = 22;
            golf = tango;
            oscar = undefined;
            report = undefined;
            if(mike) { _fun00052_ip = 244; continue _fun00051 }
 90:
            mike = golf.value;
            foxtrot = mike.type;
            romeo = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[options];
            tango = romeo.bind(offset)(tango);
            tango = tango.MessagePotionTypes;
            tango = tango.CONFETTI;
            romeo = report;
            if(!(foxtrot === tango)) { _fun00052_ip = 209; continue _fun00051 }
 136:
            foxtrot = mike.used_by;
            backup = _closure1_slot14;
            tango = backup.getCurrentUser;
            backup = tango.bind(backup)();
            kilo = entity == backup;
            tango = undefined;
            if(kilo) { _fun00052_ip = 169; continue _fun00051 }
 164:
            tango = backup.id;
 169:
            oscar = backup;
            romeo = report;
            if(!(foxtrot === tango)) { _fun00052_ip = 209; continue _fun00051 }
 179:
            foxtrot = mike.emoji;
            kilo = entity == foxtrot;
            tango = undefined;
            if(kilo) { _fun00052_ip = 199; continue _fun00051 }
 194:
            tango = foxtrot.length;
 199:
            oscar = backup;
            romeo = foxtrot;
            if(!(!(tango > zulu))) { _fun00052_ip = 232; continue _fun00051 }
 209:
            foxtrot = verify.bind(offset)();
            tango = foxtrot.done;
            report = romeo;
            golf = foxtrot;
            if(tango) { _fun00052_ip = 244; continue _fun00051 }
 227:
            _fun00052_ip = 90; continue _fun00051;
 232:
            mike = mike.emoji;
            mike = mike[zulu];
            return mike;
 244:
            return entity;
 246:
            return entity;
 248:
            return entity;
 250:
            return entity;
        }
    };
    zulu['getSentConfettiPotionEmoji'] = mike;
    return entity;
})();