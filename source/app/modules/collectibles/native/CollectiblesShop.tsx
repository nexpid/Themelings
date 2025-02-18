// app/modules/collectibles/native/CollectiblesShop.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot17;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot17;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityIndicator;
    var _closure1_slot5 = option;
    option = tangon.StyleSheet;
    var _closure1_slot6 = option;
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    tangon = tangon.PaymentGateways;
    var _closure1_slot11 = tangon;
    tangon = 6;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'height': '100%', 'width': '100%'};
    tangon['rootContainer'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'zIndex': 5};
    tangon['blur'] = verify;
    verify = {};
    offset = 56;
    verify['height'] = offset;
    tangon['header'] = verify;
    verify = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    tangon['spinner'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = function() { // Original name: ListHeader
        michal = _closure1_slot14;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot12;
        michal = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = tangon;
    tangon = 39;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShop.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            ctrled = entity.analyticsSource;
            var _closure2_slot0 = ctrled;
            sequen = entity.onClose;
            report = undefined;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 8;
            entity = golfie[entity];
            tangon = option.bind(report)(entity);
            zuuluu = tangon.useCommonTriggerPoint;
            entity = 9;
            entity = golfie[entity];
            entity = option.bind(report)(entity);
            entity = entity.CollectiblesShopOpenTriggerPoint;
            entity = zuuluu.bind(tangon)(entity);
            entity = _closure1_slot14;
            oscard = entity.bind(report)();
            zuuluu = _closure1_slot1;
            entity = 10;
            entity = golfie[entity];
            tangon = zuuluu.bind(report)(entity);
            entity = {};
            verify = _closure1_slot11;
            verify = verify.APPLE;
            entity['paymentGateway'] = verify;
            verify = 'CollectiblesShop.native';
            entity['location'] = verify;
            update = 11;
            offset = golfie[update];
            yankee = option.bind(report)(offset);
            offset = yankee.isAndroid;
            offset = offset.bind(yankee)();
            result = false;
            offset = result === offset;
            entity['noOp'] = offset;
            entity = tangon.bind(report)(entity);
            tangon = entity.categories;
            var _closure2_slot1 = tangon;
            offset = entity.isFetchingCategories;
            var _closure2_slot2 = offset;
            entity = 12;
            entity = golfie[entity];
            option = option.bind(report)(entity);
            entity = option.useCollectiblesMobileBundle;
            record = entity.bind(option)(verify);
            var _closure2_slot3 = record;
            entity = 13;
            entity = golfie[entity];
            option = zuuluu.bind(report)(entity);
            entity = 'shop_include_unpublished';
            source = option.bind(report)(entity);
            var _closure2_slot4 = source;
            yankee = _closure1_slot4;
            verify = yankee.useMemo;
            option = new Array(2);
            option[0] = tangon;
            option[1] = offset;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00010_ip = 145; continue _fun00009 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 11;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.isAndroid;
                    tangon = entity.bind(tangon)();
                    entity = false;
                    if(!(entity !== tangon)) { _fun00010_ip = 145; continue _fun00009 }
 58:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot16;
                    tangon = _closure2_slot1;
                    michal = tangon.values;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00010_ip = 143; continue _fun00009 }
 100:
                    michal = zuuluu.value;
                    option = michal.products;
                    golfie = option.forEach;
                    michal = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.googleSkuIds;
                            entity = undefined;
                            zuuluu = entity !== zuuluu;
                            if(!zuuluu) { _fun00012_ip = 30; continue _fun00011 }
 18:
                            report = michal.googleSkuIds;
                            tangon = null;
                            zuuluu = tangon !== report;
 30:
                            if(!zuuluu) { _fun00012_ip = 95; continue _fun00011 }
 33:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.push;
                            report = global;
                            oscard = report.Object;
                            report = oscard.values;
                            michal = michal.googleSkuIds;
                            option = report.bind(oscard)(michal);
                            michal = new Array(0);
                            golfie = 0;
                            verify = michal;
                            report = arraySpread(verify, option, golfie);
                            verify = zuuluu;
                            option = michal;
                            golfie = tangon;
                            michal = apply(verify, option, golfie);
 95:
                            return entity;
                        }
                    };
                    michal = golfie.bind(option)(michal);
                    golfie = tangon.bind(report)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00010_ip = 100; continue _fun00009 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            option = verify.bind(yankee)(entity, option);
            entity = 14;
            entity = golfie[entity];
            golfie = zuuluu.bind(report)(entity);
            zuuluu = golfie.useNativeIAPPayments;
            entity = {};
            entity['productIds'] = option;
            option = true;
            option = option === offset;
            entity['fetchingProductIDs'] = option;
            zuuluu = zuuluu.bind(golfie)(entity);
            cntext = zuuluu.nativePaymentsConnected;
            var _closure2_slot5 = cntext;
            entity = zuuluu.storeFront;
            verify = zuuluu.isFetchingNativeSKUs;
            kiloes = null;
            zuuluu = kiloes == entity;
            papara = undefined;
            if(zuuluu) { _fun00008_ip = 371; continue _fun00007 }
 365:
            papara = entity.country;
 371:
            _closure2_slot6 = papara;
            backup = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 15;
            entity = yankee[entity];
            zuuluu = backup.bind(report)(entity);
            entity = zuuluu.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(zuuluu)();
            entity = 16;
            entity = yankee[entity];
            zuuluu = backup.bind(report)(entity);
            entity = zuuluu.useCurrentUser;
            zuuluu = entity.bind(zuuluu)();
            _closure2_slot7 = zuuluu;
            entity = 17;
            entity = yankee[entity];
            golfie = backup.bind(report)(entity);
            entity = golfie.usePurchasedCategoriesSort;
            output = entity.bind(golfie)(tangon);
            option = 18;
            entity = yankee[option];
            foxtra = backup.bind(report)(entity);
            romeon = foxtra.useStateFromStores;
            entity = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 19;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot8;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = romeon.bind(foxtra)(golfie, entity);
            _closure2_slot8 = entity;
            entity = 19;
            entity = yankee[entity];
            golfie = backup.bind(report)(entity);
            entity = golfie.useThemeContext;
            entity = entity.bind(golfie)();
            romeon = entity.theme;
            sizing = _closure1_slot1;
            entity = 20;
            golfie = yankee[entity];
            foxtra = sizing.bind(report)(golfie);
            golfie = 21;
            golfie = yankee[golfie];
            golfie = sizing.bind(report)(golfie);
            vacuum = golfie.COLLECTIBLES_SHOP;
            golfie = new Array(1);
            golfie[0] = vacuum;
            golfie = foxtra.bind(report)(golfie);
            golfie = golfie.analyticsLocations;
            _closure2_slot9 = golfie;
            foxtra = 22;
            foxtra = yankee[foxtra];
            vacuum = sizing.bind(report)(foxtra);
            foxtra = {};
            foxtra['onClose'] = sequen;
            foxtra = vacuum.bind(report)(foxtra);
            foxtra = 23;
            foxtra = yankee[foxtra];
            foxtra = sizing.bind(report)(foxtra);
            foxtra = foxtra.bind(report)();
            sizing = foxtra.top;
            option = yankee[option];
            sequen = backup.bind(report)(option);
            vacuum = sequen.useStateFromStoresArray;
            option = _closure1_slot9;
            foxtra = new Array(1);
            foxtra[0] = option;
            option = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure1_slot9;
                    entity = entity.lastSuccessfulFetch;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00014_ip = 27; continue _fun00013 }
 24:
                    michal = entity;
 27:
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                }
            };
            vacuum = vacuum.bind(sequen)(foxtra, option);
            foxtra = _closure1_slot3;
            option = 1;
            foxtra = foxtra.bind(report)(vacuum, option);
            option = 0;
            foxtra = foxtra[option];
            yankee = yankee[update];
            backup = backup.bind(report)(yankee);
            yankee = backup.isAndroid;
            yankee = yankee.bind(backup)();
            sequen = output;
            if(!yankee) { _fun00008_ip = 744; continue _fun00007 }
 713:
            backup = _closure1_slot0;
            update = _closure1_slot2;
            yankee = 24;
            yankee = update[yankee];
            backup = backup.bind(report)(yankee);
            yankee = backup.filterGPlaySyncedCategories;
            sequen = yankee.bind(backup)(output);
 744:
            backup = _closure1_slot0;
            update = _closure1_slot2;
            yankee = 25;
            yankee = update[yankee];
            vacuum = backup.bind(report)(yankee);
            output = vacuum.useCollectiblesShopDeepLinkProps;
            yankee = {};
            yankee['categories'] = sequen;
            yankee = output.bind(vacuum)(yankee);
            output = yankee.categoryIndex;
            vacuum = _closure1_slot1;
            yankee = 26;
            yankee = update[yankee];
            vacuum = vacuum.bind(report)(yankee);
            yankee = 27;
            yankee = update[yankee];
            config = backup.bind(report)(yankee);
            yankee = config.v4;
            yankee = yankee.bind(config)();
            yankee = vacuum.bind(report)(yankee);
            _closure2_slot10 = yankee;
            vacuum = _closure1_slot4;
            target = vacuum.useEffect;
            config = new Array(3);
            config[0] = golfie;
            config[1] = ctrled;
            config[2] = yankee;
            ctrled = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 28;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot10;
                zuuluu = michal.COLLECTIBLES_SHOP_VIEWED;
                michal = {};
                golfie = _closure2_slot9;
                michal['location_stack'] = golfie;
                golfie = _closure2_slot10;
                michal['page_session_id'] = golfie;
                oscard = _closure2_slot0;
                michal['source'] = oscard;
                oscard = 'home';
                michal['page_type'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            ctrled = target.bind(vacuum)(ctrled, config);
            config = vacuum.useEffect;
            ctrled = new Array(4);
            ctrled[0] = papara;
            ctrled[1] = cntext;
            ctrled[2] = record;
            ctrled[3] = source;
            source = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    entity = michal != zuuluu;
 20:
                    if(!entity) { _fun00016_ip = 103; continue _fun00015 }
 23:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 29;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchCollectiblesCategories;
                    entity = {};
                    oscard = _closure2_slot6;
                    entity['countryCode'] = oscard;
                    report = _closure1_slot11;
                    report = report.APPLE;
                    entity['paymentGateway'] = report;
                    report = _closure2_slot3;
                    entity['includeBundles'] = report;
                    tangon = _closure2_slot4;
                    entity['includeUnpublished'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            source = config.bind(vacuum)(source, ctrled);
            config = vacuum.useEffect;
            ctrled = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 30;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.lockOrientation;
                entity = 'PORTRAIT';
                entity = michal.bind(zuuluu)(entity);
                entity = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 30;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.unlockOrientation;
                    michal = {};
                    report = false;
                    michal['unlockAfterRotatingToPreviousLock'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                return entity;
            };
            source = new Array(0);
            source = config.bind(vacuum)(ctrled, source);
            ctrled = vacuum.useEffect;
            source = new Array(1);
            source[0] = zuuluu;
            zuuluu = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 31;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = _closure2_slot7;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = ctrled.bind(vacuum)(zuuluu, source);
            zuuluu = global;
            source = zuuluu.Date;
            zuuluu = source.now;
            zuuluu = zuuluu.bind(source)();
            foxtra = zuuluu - foxtra;
            zuuluu = 32;
            zuuluu = update[zuuluu];
            zuuluu = backup.bind(report)(zuuluu);
            zuuluu = zuuluu.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            zuuluu = foxtra > zuuluu;
            if(offset) { _fun00008_ip = 1008; continue _fun00007 }
 1005:
            if(!verify) { _fun00008_ip = 1026; continue _fun00007 }
 1008:
            tangon = tangon.size;
            if(!(option !== tangon)) { _fun00008_ip = 1498; continue _fun00007 }
 1020:
            if(zuuluu) { _fun00008_ip = 1498; continue _fun00007 }
 1026:
            tangon = _closure1_slot12;
            update = _closure1_slot0;
            source = _closure1_slot2;
            entity = source[entity];
            entity = update.bind(report)(entity);
            zuuluu = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = golfie;
            verify = _closure1_slot13;
            golfie = 33;
            golfie = source[golfie];
            golfie = update.bind(report)(golfie);
            option = golfie.CollectiblesAnalyticsProvider;
            golfie = {};
            offset = {};
            offset['sessionId'] = yankee;
            golfie['newValue'] = offset;
            yankee = _closure1_slot1;
            offset = 34;
            offset = source[offset];
            yankee = yankee.bind(report)(offset);
            offset = {};
            foxtra = 0.5;
            offset['blurAmount'] = foxtra;
            foxtra = _closure1_slot6;
            backup = foxtra.absoluteFill;
            foxtra = new Array(3);
            foxtra[0] = backup;
            backup = oscard.blur;
            foxtra[1] = backup;
            backup = {};
            ctrled = 48;
            ctrled = ctrled + sizing;
            backup['height'] = ctrled;
            foxtra[2] = backup;
            offset['style'] = foxtra;
            offset['blurTheme'] = romeon;
            yankee = tangon.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            romeon = _closure1_slot7;
            yankee = {};
            foxtra = {};
            sierra = oscard.rootContainer;
            limora = foxtra;
            backup = copyDataProperties(limora, sierra);
            backup = 'paddingTop';
            foxtra[backup] = sizing;
            yankee['style'] = foxtra;
            foxtra = 35;
            foxtra = source[foxtra];
            foxtra = update.bind(report)(foxtra);
            backup = foxtra.NativePaymentContextProvider;
            foxtra = {};
            sizing = new Array(0);
            foxtra['skuIDs'] = sizing;
            foxtra['activeSubscription'] = kiloes;
            kiloes = 36;
            kiloes = source[kiloes];
            kiloes = update.bind(report)(kiloes);
            sizing = kiloes.FlashList;
            kiloes = {};
            ctrled = 37;
            vacuum = source[ctrled];
            vacuum = update.bind(report)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            ctrled = source[ctrled];
            ctrled = update.bind(report)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.pWG4zc;
            ctrled = vacuum.bind(config)(ctrled);
            kiloes['accessibilityLabel'] = ctrled;
            vacuum = sequen.filter;
            ctrled = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.unpublishedAt;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00018_ip = 56; continue _fun00017 }
 18:
                    zuuluu = michal.unpublishedAt;
                    michal = global;
                    michal = michal.Date;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    report = tangon;
                    michal = new report[michal](tangon);
                    michal = michal instanceof Object ? michal : tangon;
                    entity = zuuluu > michal;
 56:
                    return entity;
                }
            };
            sequen = vacuum.bind(sequen)(ctrled);
            vacuum = sequen.filter;
            ctrled = function(argFoo) {
                entity = argFoo;
                entity = entity.products;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            ctrled = vacuum.bind(sequen)(ctrled);
            kiloes['data'] = ctrled;
            echoed = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 38;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ShopCategory;
                entity = {};
                entity['item'] = oscard;
                oscard = _closure2_slot8;
                entity['isDarkTheme'] = oscard;
                entity['index'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            kiloes['renderItem'] = echoed;
            kiloes['showsVerticalScrollIndicator'] = result;
            result = 38;
            echoed = source[result];
            echoed = update.bind(report)(echoed);
            echoed = echoed.CATEGORY_CONTAINER_HEIGHT;
            result = source[result];
            result = update.bind(report)(result);
            result = result.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            result = echoed + result;
            kiloes['estimatedItemSize'] = result;
            result = _closure1_slot15;
            kiloes['ListHeaderComponent'] = result;
            kiloes['initialScrollIndex'] = output;
            kiloes = tangon.bind(report)(sizing, kiloes);
            foxtra['children'] = kiloes;
            foxtra = tangon.bind(report)(backup, foxtra);
            yankee['children'] = foxtra;
            yankee = tangon.bind(report)(romeon, yankee);
            offset[1] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 1532; continue _fun00007;
 1498:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = oscard.spinner;
            michal['style'] = oscard;
            oscard = 'large';
            michal['size'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1532:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();