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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot17;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot17;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
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
            update = entity.analyticsSource;
            var _closure2_slot0 = update;
            papara = entity.onClose;
            report = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            entity = tangon[entity];
            golfie = oscard.bind(report)(entity);
            zuuluu = golfie.useCommonTriggerPoint;
            entity = 9;
            entity = tangon[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.CollectiblesShopOpenTriggerPoint;
            entity = zuuluu.bind(golfie)(entity);
            entity = 10;
            zuuluu = tangon[entity];
            verify = oscard.bind(report)(zuuluu);
            option = verify.useStateFromStoresArray;
            zuuluu = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure1_slot9;
                    entity = entity.lastSuccessfulFetch;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    michal = entity;
 27:
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                }
            };
            option = option.bind(verify)(golfie, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = 1;
            zuuluu = golfie.bind(report)(option, zuuluu);
            option = 0;
            zuuluu = zuuluu[option];
            golfie = global;
            verify = golfie.Date;
            golfie = verify.now;
            golfie = golfie.bind(verify)();
            verify = golfie - zuuluu;
            golfie = 11;
            golfie = tangon[golfie];
            golfie = oscard.bind(report)(golfie);
            golfie = golfie.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            verify = verify > golfie;
            ctrled = 12;
            tangon = tangon[ctrled];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isAndroid;
            offset = tangon.bind(oscard)();
            if(offset) { _fun00008_ip = 290; continue _fun00007 }
 244:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[ctrled];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isIOS;
            tangon = tangon.bind(oscard)();
            if(!tangon) { _fun00008_ip = 287; continue _fun00007 }
 274:
            oscard = option === zuuluu;
            if(oscard) { _fun00008_ip = 284; continue _fun00007 }
 281:
            oscard = verify;
 284:
            tangon = oscard;
 287:
            offset = tangon;
 290:
            tangon = _closure1_slot14;
            oscard = tangon.bind(report)();
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            tangon = 13;
            tangon = romeon[tangon];
            golfie = yankee.bind(report)(tangon);
            tangon = {};
            foxtra = _closure1_slot11;
            foxtra = foxtra.APPLE;
            tangon['paymentGateway'] = foxtra;
            backup = 'CollectiblesShop.native';
            tangon['location'] = backup;
            offset = !offset;
            tangon['noOp'] = offset;
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.categories;
            _closure2_slot1 = tangon;
            offset = golfie.isFetchingCategories;
            _closure2_slot2 = offset;
            foxtra = _closure1_slot0;
            golfie = 14;
            golfie = romeon[golfie];
            foxtra = foxtra.bind(report)(golfie);
            golfie = foxtra.useCollectiblesMobileBundle;
            sequen = golfie.bind(foxtra)(backup);
            _closure2_slot3 = sequen;
            golfie = 15;
            golfie = romeon[golfie];
            foxtra = yankee.bind(report)(golfie);
            golfie = 'shop_include_unpublished';
            echoed = foxtra.bind(report)(golfie);
            _closure2_slot4 = echoed;
            kiloes = _closure1_slot4;
            backup = kiloes.useMemo;
            foxtra = new Array(2);
            foxtra[0] = tangon;
            foxtra[1] = offset;
            golfie = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00012_ip = 145; continue _fun00011 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.isAndroid;
                    tangon = entity.bind(tangon)();
                    entity = false;
                    if(!(entity !== tangon)) { _fun00012_ip = 145; continue _fun00011 }
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
                    if(michal) { _fun00012_ip = 143; continue _fun00011 }
 100:
                    michal = zuuluu.value;
                    option = michal.products;
                    golfie = option.forEach;
                    michal = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.googleSkuIds;
                            entity = undefined;
                            zuuluu = entity !== zuuluu;
                            if(!zuuluu) { _fun00014_ip = 30; continue _fun00013 }
 18:
                            report = michal.googleSkuIds;
                            tangon = null;
                            zuuluu = tangon !== report;
 30:
                            if(!zuuluu) { _fun00014_ip = 95; continue _fun00013 }
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
                    if(!michal) { _fun00012_ip = 100; continue _fun00011 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            foxtra = backup.bind(kiloes)(golfie, foxtra);
            golfie = 16;
            golfie = romeon[golfie];
            romeon = yankee.bind(report)(golfie);
            yankee = romeon.useNativeIAPPayments;
            golfie = {};
            golfie['productIds'] = foxtra;
            foxtra = true;
            foxtra = foxtra === offset;
            golfie['fetchingProductIDs'] = foxtra;
            yankee = yankee.bind(romeon)(golfie);
            config = yankee.nativePaymentsConnected;
            _closure2_slot5 = config;
            golfie = yankee.storeFront;
            foxtra = yankee.isFetchingNativeSKUs;
            kiloes = null;
            yankee = kiloes == golfie;
            record = undefined;
            if(yankee) { _fun00008_ip = 550; continue _fun00007 }
 544:
            record = golfie.country;
 550:
            _closure2_slot6 = record;
            output = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 17;
            golfie = yankee[golfie];
            romeon = output.bind(report)(golfie);
            golfie = romeon.useReloadProfileEffectWhenConfigsAreMissing;
            golfie = golfie.bind(romeon)();
            golfie = 18;
            golfie = yankee[golfie];
            romeon = output.bind(report)(golfie);
            golfie = romeon.useCurrentUser;
            backup = golfie.bind(romeon)();
            _closure2_slot7 = backup;
            golfie = 19;
            golfie = yankee[golfie];
            romeon = output.bind(report)(golfie);
            golfie = romeon.usePurchasedCategoriesSort;
            source = golfie.bind(romeon)(tangon);
            entity = yankee[entity];
            sizing = output.bind(report)(entity);
            romeon = sizing.useStateFromStores;
            entity = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 20;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot8;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = romeon.bind(sizing)(golfie, entity);
            _closure2_slot8 = entity;
            entity = 20;
            entity = yankee[entity];
            golfie = output.bind(report)(entity);
            entity = golfie.useThemeContext;
            entity = entity.bind(golfie)();
            romeon = entity.theme;
            vacuum = _closure1_slot1;
            entity = 21;
            golfie = yankee[entity];
            sizing = vacuum.bind(report)(golfie);
            golfie = 22;
            golfie = yankee[golfie];
            golfie = vacuum.bind(report)(golfie);
            cntext = golfie.COLLECTIBLES_SHOP;
            golfie = new Array(1);
            golfie[0] = cntext;
            golfie = sizing.bind(report)(golfie);
            golfie = golfie.analyticsLocations;
            _closure2_slot9 = golfie;
            sizing = 23;
            sizing = yankee[sizing];
            cntext = vacuum.bind(report)(sizing);
            sizing = {};
            sizing['onClose'] = papara;
            sizing = cntext.bind(report)(sizing);
            sizing = 24;
            sizing = yankee[sizing];
            sizing = vacuum.bind(report)(sizing);
            sizing = sizing.bind(report)();
            sizing = sizing.top;
            yankee = yankee[ctrled];
            output = output.bind(report)(yankee);
            yankee = output.isAndroid;
            yankee = yankee.bind(output)();
            vacuum = source;
            if(!yankee) { _fun00008_ip = 861; continue _fun00007 }
 830:
            output = _closure1_slot0;
            ctrled = _closure1_slot2;
            yankee = 25;
            yankee = ctrled[yankee];
            output = output.bind(report)(yankee);
            yankee = output.filterGPlaySyncedCategories;
            vacuum = yankee.bind(output)(source);
 861:
            ctrled = _closure1_slot0;
            cntext = _closure1_slot2;
            yankee = 26;
            yankee = cntext[yankee];
            source = ctrled.bind(report)(yankee);
            output = source.useCollectiblesShopDeepLinkProps;
            yankee = {};
            yankee['categories'] = vacuum;
            yankee = output.bind(source)(yankee);
            output = yankee.categoryIndex;
            source = _closure1_slot1;
            yankee = 27;
            yankee = cntext[yankee];
            source = source.bind(report)(yankee);
            yankee = 28;
            yankee = cntext[yankee];
            ctrled = ctrled.bind(report)(yankee);
            yankee = ctrled.v4;
            yankee = yankee.bind(ctrled)();
            yankee = source.bind(report)(yankee);
            _closure2_slot10 = yankee;
            source = _closure1_slot4;
            cntext = source.useEffect;
            ctrled = new Array(3);
            ctrled[0] = golfie;
            ctrled[1] = update;
            ctrled[2] = yankee;
            update = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 29;
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
            update = cntext.bind(source)(update, ctrled);
            ctrled = source.useEffect;
            update = new Array(4);
            update[0] = record;
            update[1] = config;
            update[2] = sequen;
            update[3] = echoed;
            echoed = function() {
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
                    entity = 30;
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
            echoed = ctrled.bind(source)(echoed, update);
            update = source.useEffect;
            echoed = new Array(1);
            echoed[0] = backup;
            backup = function() {
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
            backup = update.bind(source)(backup, echoed);
            if(offset) { _fun00008_ip = 1060; continue _fun00007 }
 1057:
            if(!foxtra) { _fun00008_ip = 1078; continue _fun00007 }
 1060:
            foxtra = tangon.size;
            if(!(option !== foxtra)) { _fun00008_ip = 1617; continue _fun00007 }
 1072:
            if(verify) { _fun00008_ip = 1617; continue _fun00007 }
 1078:
            zuuluu = zuuluu > option;
            if(!zuuluu) { _fun00008_ip = 1091; continue _fun00007 }
 1085:
            verify = false;
            zuuluu = verify === offset;
 1091:
            if(!zuuluu) { _fun00008_ip = 1103; continue _fun00007 }
 1094:
            tangon = tangon.size;
            zuuluu = option === tangon;
 1103:
            if(!zuuluu) { _fun00008_ip = 1143; continue _fun00007 }
 1106:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 32;
            zuuluu = option[zuuluu];
            option = tangon.bind(report)(zuuluu);
            tangon = option.captureMessage;
            zuuluu = 'collectibles mobile shop loaded empty categories';
            zuuluu = tangon.bind(option)(zuuluu);
 1143:
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
            echoed = 48;
            echoed = echoed + sizing;
            backup['height'] = echoed;
            foxtra[2] = backup;
            offset['style'] = foxtra;
            offset['blurTheme'] = romeon;
            yankee = tangon.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            romeon = _closure1_slot7;
            yankee = {};
            foxtra = {};
            target = oscard.rootContainer;
            status = foxtra;
            backup = copyDataProperties(status, target);
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
            echoed = 37;
            ctrled = source[echoed];
            ctrled = update.bind(report)(ctrled);
            sequen = ctrled.intl;
            ctrled = sequen.string;
            echoed = source[echoed];
            echoed = update.bind(report)(echoed);
            echoed = echoed.t;
            echoed = echoed.pWG4zc;
            echoed = ctrled.bind(sequen)(echoed);
            kiloes['accessibilityLabel'] = echoed;
            ctrled = vacuum.filter;
            echoed = function(argFoo) {
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
            vacuum = ctrled.bind(vacuum)(echoed);
            ctrled = vacuum.filter;
            echoed = function(argFoo) {
                entity = argFoo;
                entity = entity.products;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            echoed = ctrled.bind(vacuum)(echoed);
            kiloes['data'] = echoed;
            result = function(argFoo) { // Original name: renderItem
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
            kiloes['renderItem'] = result;
            result = false;
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
            _fun00008_ip = 1651; continue _fun00007;
 1617:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = oscard.spinner;
            michal['style'] = oscard;
            oscard = 'large';
            michal['size'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1651:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();