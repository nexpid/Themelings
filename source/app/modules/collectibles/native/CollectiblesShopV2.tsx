// app/modules/collectibles/native/CollectiblesShopV2.tsx
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
            verify = _closure1_slot19;
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
            golfie = _closure1_slot19;
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
    var _closure1_slot18 = entity;
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
    var _closure1_slot19 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot11 = golfie;
    tangon = tangon.PaymentGateways;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot13 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 8;
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
    var _closure1_slot15 = tangon;
    tangon = function() { // Original name: ListHeader
        michal = _closure1_slot15;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot13;
        michal = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot16 = tangon;
    tangon = function(argFoo) { // Original name: CollectiblesShopInternal
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            sizing = entity.analyticsSource;
            var _closure2_slot0 = sizing;
            source = entity.onClose;
            tangon = entity.storeFront;
            report = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            oscard = verify.bind(report)(entity);
            zuuluu = oscard.useCommonTriggerPoint;
            entity = 10;
            entity = offset[entity];
            entity = verify.bind(report)(entity);
            entity = entity.CollectiblesShopOpenTriggerPoint;
            entity = zuuluu.bind(oscard)(entity);
            entity = 11;
            zuuluu = offset[entity];
            option = verify.bind(report)(zuuluu);
            golfie = option.useStateFromStoresArray;
            zuuluu = _closure1_slot10;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure1_slot10;
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
            golfie = golfie.bind(option)(oscard, zuuluu);
            oscard = _closure1_slot3;
            zuuluu = 1;
            zuuluu = oscard.bind(report)(golfie, zuuluu);
            option = 0;
            zuuluu = zuuluu[option];
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            oscard = oscard.bind(golfie)();
            golfie = oscard - zuuluu;
            oscard = 12;
            oscard = offset[oscard];
            oscard = verify.bind(report)(oscard);
            oscard = oscard.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            foxtra = golfie > oscard;
            oscard = _closure1_slot15;
            oscard = oscard.bind(report)();
            output = null;
            golfie = output == tangon;
            yankee = undefined;
            if(golfie) { _fun00008_ip = 235; continue _fun00007 }
 229:
            yankee = tangon.country;
 235:
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 13;
            tangon = verify[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = {};
            verify = _closure1_slot12;
            verify = verify.APPLE;
            tangon['paymentGateway'] = verify;
            if(!(output == yankee)) { _fun00008_ip = 280; continue _fun00007 }
 276:
            verify = {};
            _fun00008_ip = 290; continue _fun00007;
 280:
            offset = {};
            offset['countryCode'] = yankee;
            verify = offset;
 290:
            cntext = tangon;
            record = verify;
            verify = copyDataProperties(cntext, record);
            offset = 'CollectiblesShop.native';
            verify = 'location';
            tangon[verify] = offset;
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.categories;
            _closure2_slot1 = tangon;
            romeon = golfie.isFetchingCategories;
            _closure2_slot2 = romeon;
            yankee = _closure1_slot4;
            offset = yankee.useMemo;
            verify = new Array(2);
            verify[0] = tangon;
            verify[1] = romeon;
            golfie = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00012_ip = 145; continue _fun00011 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 14;
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
                    zuuluu = _closure1_slot18;
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
            yankee = offset.bind(yankee)(golfie, verify);
            result = _closure1_slot1;
            vacuum = _closure1_slot2;
            golfie = 15;
            golfie = vacuum[golfie];
            offset = result.bind(report)(golfie);
            verify = offset.useGoogleSkuIds;
            golfie = true;
            golfie = golfie === romeon;
            golfie = verify.bind(offset)(yankee, golfie);
            offset = golfie.isFetchingGoogleSkus;
            verify = golfie.fetchError;
            ctrled = _closure1_slot0;
            golfie = 16;
            golfie = vacuum[golfie];
            yankee = ctrled.bind(report)(golfie);
            golfie = yankee.useReloadProfileEffectWhenConfigsAreMissing;
            golfie = golfie.bind(yankee)();
            golfie = 17;
            golfie = vacuum[golfie];
            yankee = ctrled.bind(report)(golfie);
            golfie = yankee.useCurrentUser;
            kiloes = golfie.bind(yankee)();
            _closure2_slot3 = kiloes;
            golfie = 18;
            golfie = vacuum[golfie];
            yankee = ctrled.bind(report)(golfie);
            golfie = yankee.usePurchasedCategoriesSort;
            sequen = golfie.bind(yankee)(tangon);
            entity = vacuum[entity];
            backup = ctrled.bind(report)(entity);
            yankee = backup.useStateFromStores;
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
            entity = yankee.bind(backup)(golfie, entity);
            _closure2_slot4 = entity;
            entity = 19;
            entity = vacuum[entity];
            golfie = ctrled.bind(report)(entity);
            entity = golfie.useThemeContext;
            entity = entity.bind(golfie)();
            backup = entity.theme;
            entity = 20;
            golfie = vacuum[entity];
            yankee = result.bind(report)(golfie);
            golfie = 21;
            golfie = vacuum[golfie];
            golfie = result.bind(report)(golfie);
            echoed = golfie.COLLECTIBLES_SHOP;
            golfie = new Array(1);
            golfie[0] = echoed;
            golfie = yankee.bind(report)(golfie);
            golfie = golfie.analyticsLocations;
            _closure2_slot5 = golfie;
            yankee = 22;
            yankee = vacuum[yankee];
            echoed = result.bind(report)(yankee);
            yankee = {};
            yankee['onClose'] = source;
            yankee = echoed.bind(report)(yankee);
            yankee = 23;
            yankee = vacuum[yankee];
            yankee = result.bind(report)(yankee);
            yankee = yankee.bind(report)();
            result = yankee.top;
            config = 24;
            yankee = vacuum[config];
            source = ctrled.bind(report)(yankee);
            echoed = source.filterHiddenCategories;
            yankee = 14;
            yankee = vacuum[yankee];
            ctrled = ctrled.bind(report)(yankee);
            yankee = ctrled.isAndroid;
            ctrled = yankee.bind(ctrled)();
            yankee = sequen;
            if(!ctrled) { _fun00008_ip = 740; continue _fun00007 }
 712:
            vacuum = _closure1_slot0;
            ctrled = _closure1_slot2;
            ctrled = ctrled[config];
            vacuum = vacuum.bind(report)(ctrled);
            ctrled = vacuum.filterGPlaySyncedCategories;
            yankee = ctrled.bind(vacuum)(sequen);
 740:
            source = echoed.bind(source)(yankee);
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            yankee = 25;
            yankee = sequen[yankee];
            ctrled = vacuum.bind(report)(yankee);
            echoed = ctrled.useCollectiblesShopDeepLinkProps;
            yankee = {};
            yankee['categories'] = source;
            yankee = echoed.bind(ctrled)(yankee);
            echoed = yankee.categoryIndex;
            ctrled = _closure1_slot1;
            yankee = 26;
            yankee = sequen[yankee];
            ctrled = ctrled.bind(report)(yankee);
            yankee = 27;
            yankee = sequen[yankee];
            vacuum = vacuum.bind(report)(yankee);
            yankee = vacuum.v4;
            yankee = yankee.bind(vacuum)();
            yankee = ctrled.bind(report)(yankee);
            _closure2_slot6 = yankee;
            vacuum = _closure1_slot4;
            sequen = vacuum.useEffect;
            ctrled = new Array(3);
            ctrled[0] = golfie;
            ctrled[1] = sizing;
            ctrled[2] = yankee;
            sizing = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 28;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot11;
                zuuluu = michal.COLLECTIBLES_SHOP_VIEWED;
                michal = {};
                golfie = _closure2_slot5;
                michal['location_stack'] = golfie;
                golfie = _closure2_slot6;
                michal['page_session_id'] = golfie;
                oscard = _closure2_slot0;
                michal['source'] = oscard;
                oscard = 'home';
                michal['page_type'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            sizing = sequen.bind(vacuum)(sizing, ctrled);
            ctrled = vacuum.useEffect;
            sizing = new Array(1);
            sizing[0] = kiloes;
            kiloes = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = _closure2_slot3;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            kiloes = ctrled.bind(vacuum)(kiloes, sizing);
            kiloes = tangon.size;
            if(!(option !== kiloes)) { _fun00008_ip = 912; continue _fun00007 }
 909:
            if(!foxtra) { _fun00008_ip = 924; continue _fun00007 }
 912:
            if(romeon) { _fun00008_ip = 1498; continue _fun00007 }
 918:
            if(offset) { _fun00008_ip = 1498; continue _fun00007 }
 924:
            zuuluu = zuuluu > option;
            if(!zuuluu) { _fun00008_ip = 937; continue _fun00007 }
 931:
            offset = false;
            zuuluu = offset === romeon;
 937:
            if(!zuuluu) { _fun00008_ip = 949; continue _fun00007 }
 940:
            tangon = tangon.size;
            zuuluu = option === tangon;
 949:
            if(!zuuluu) { _fun00008_ip = 989; continue _fun00007 }
 952:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 30;
            zuuluu = option[zuuluu];
            option = tangon.bind(report)(zuuluu);
            tangon = option.captureMessage;
            zuuluu = 'collectibles mobile shop loaded empty categories';
            zuuluu = tangon.bind(option)(zuuluu);
 989:
            if(!(output !== verify)) { _fun00008_ip = 1034; continue _fun00007 }
 993:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 30;
            zuuluu = option[zuuluu];
            option = tangon.bind(report)(zuuluu);
            tangon = option.captureMessage;
            zuuluu = 'collectibles mobile shop failed to fetch google sku ids: ';
            zuuluu = zuuluu + verify;
            zuuluu = tangon.bind(option)(zuuluu);
 1034:
            tangon = _closure1_slot13;
            ctrled = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = foxtra[entity];
            entity = ctrled.bind(report)(entity);
            zuuluu = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = golfie;
            verify = _closure1_slot14;
            golfie = 31;
            golfie = foxtra[golfie];
            golfie = ctrled.bind(report)(golfie);
            option = golfie.CollectiblesAnalyticsProvider;
            golfie = {};
            offset = {};
            offset['sessionId'] = yankee;
            golfie['newValue'] = offset;
            romeon = _closure1_slot1;
            offset = 32;
            offset = foxtra[offset];
            yankee = romeon.bind(report)(offset);
            offset = {};
            kiloes = 0.5;
            offset['blurAmount'] = kiloes;
            kiloes = _closure1_slot6;
            sizing = kiloes.absoluteFill;
            kiloes = new Array(3);
            kiloes[0] = sizing;
            sizing = oscard.blur;
            kiloes[1] = sizing;
            sizing = {};
            vacuum = 48;
            vacuum = vacuum + result;
            sizing['height'] = vacuum;
            kiloes[2] = sizing;
            offset['style'] = kiloes;
            offset['blurTheme'] = backup;
            yankee = tangon.bind(report)(yankee, offset);
            offset = new Array(3);
            offset[0] = yankee;
            backup = _closure1_slot7;
            yankee = {};
            kiloes = {};
            record = oscard.rootContainer;
            cntext = kiloes;
            sizing = copyDataProperties(cntext, record);
            sizing = 'paddingTop';
            kiloes[sizing] = result;
            yankee['style'] = kiloes;
            kiloes = 33;
            kiloes = foxtra[kiloes];
            kiloes = ctrled.bind(report)(kiloes);
            sizing = kiloes.NativePaymentContextProvider;
            kiloes = {};
            result = new Array(0);
            kiloes['skuIDs'] = result;
            kiloes['activeSubscription'] = output;
            output = 34;
            output = foxtra[output];
            output = ctrled.bind(report)(output);
            result = output.FlashList;
            output = {};
            vacuum = 35;
            sequen = foxtra[vacuum];
            sequen = ctrled.bind(report)(sequen);
            config = sequen.intl;
            sequen = config.string;
            vacuum = foxtra[vacuum];
            vacuum = ctrled.bind(report)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.pWG4zc;
            vacuum = sequen.bind(config)(vacuum);
            output['accessibilityLabel'] = vacuum;
            output['data'] = source;
            update = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot13;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 36;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ShopCategory;
                entity = {};
                entity['item'] = oscard;
                oscard = _closure2_slot4;
                entity['isDarkTheme'] = oscard;
                entity['index'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            output['renderItem'] = update;
            update = false;
            output['showsVerticalScrollIndicator'] = update;
            update = 36;
            source = foxtra[update];
            source = ctrled.bind(report)(source);
            source = source.CATEGORY_CONTAINER_HEIGHT;
            update = foxtra[update];
            update = ctrled.bind(report)(update);
            update = update.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            update = source + update;
            output['estimatedItemSize'] = update;
            update = _closure1_slot16;
            output['ListHeaderComponent'] = update;
            output['initialScrollIndex'] = echoed;
            output = tangon.bind(report)(result, output);
            kiloes['children'] = output;
            kiloes = tangon.bind(report)(sizing, kiloes);
            yankee['children'] = kiloes;
            yankee = tangon.bind(report)(backup, yankee);
            offset[1] = yankee;
            yankee = 37;
            yankee = foxtra[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee = tangon.bind(report)(romeon, yankee);
            offset[2] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 1532; continue _fun00007;
 1498:
            tangon = _closure1_slot13;
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
    var _closure1_slot17 = tangon;
    michal = function(argFoo) { // Original name: CollectiblesShopV2
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 15;
            zuuluu = option[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useNativeIAPPayments;
            zuuluu = zuuluu.bind(tangon)();
            oscard = zuuluu.nativePaymentsConnected;
            var _closure2_slot0 = oscard;
            golfie = zuuluu.storeFront;
            zuuluu = _closure1_slot15;
            offset = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = 11;
            zuuluu = option[zuuluu];
            verify = tangon.bind(report)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot9;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = option.bind(verify)(tangon, zuuluu);
            zuuluu = null;
            tangon = zuuluu == verify;
            option = undefined;
            if(tangon) { _fun00016_ip = 128; continue _fun00015 }
 118:
            tangon = verify.isStaff;
            option = tangon.bind(verify)();
 128:
            if(option) { _fun00016_ip = 153; continue _fun00015 }
 131:
            tangon = zuuluu == verify;
            zuuluu = undefined;
            if(tangon) { _fun00016_ip = 150; continue _fun00015 }
 140:
            tangon = verify.isStaffPersonal;
            zuuluu = tangon.bind(verify)();
 150:
            option = zuuluu;
 153:
            yankee = _closure1_slot4;
            tangon = yankee.useState;
            zuuluu = false;
            verify = tangon.bind(yankee)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 2;
            verify = tangon.bind(report)(verify, zuuluu);
            zuuluu = 0;
            tangon = verify[zuuluu];
            zuuluu = 1;
            zuuluu = verify[zuuluu];
            var _closure2_slot1 = zuuluu;
            verify = yankee.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    if(zuuluu) { _fun00018_ip = 54; continue _fun00017 }
 14:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = function() {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            michal = _closure2_slot0;
                            if(michal) { _fun00020_ip = 23; continue _fun00019 }
 10:
                            zuuluu = _closure2_slot1;
                            michal = undefined;
                            entity = true;
                            entity = zuuluu.bind(michal)(entity);
 23:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = 10000;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return michal;
 54:
                    return entity;
                }
            };
            entity = verify.bind(yankee)(entity, zuuluu);
            verify = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 14;
            entity = entity[zuuluu];
            verify = verify.bind(report)(entity);
            entity = verify.isIOS;
            entity = entity.bind(verify)();
            if(!entity) { _fun00016_ip = 287; continue _fun00015 }
 258:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 38;
            verify = romeon[verify];
            verify = yankee.bind(report)(verify);
            verify = verify.isStable;
            entity = !verify;
 287:
            if(!entity) { _fun00016_ip = 293; continue _fun00015 }
 290:
            entity = option;
 293:
            if(oscard) { _fun00016_ip = 341; continue _fun00015 }
 296:
            if(entity) { _fun00016_ip = 341; continue _fun00015 }
 299:
            if(tangon) { _fun00016_ip = 341; continue _fun00015 }
 302:
            verify = _closure1_slot13;
            option = _closure1_slot5;
            entity = {};
            offset = offset.spinner;
            entity['style'] = offset;
            offset = 'large';
            entity['size'] = offset;
            entity = verify.bind(report)(option, entity);
            _fun00016_ip = 481; continue _fun00015;
 341:
            if(!tangon) { _fun00016_ip = 347; continue _fun00015 }
 344:
            tangon = !oscard;
 347:
            if(!tangon) { _fun00016_ip = 446; continue _fun00015 }
 350:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 30;
            tangon = offset[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.captureMessage;
            option = _closure1_slot0;
            zuuluu = offset[zuuluu];
            verify = option.bind(report)(zuuluu);
            zuuluu = verify.isIOS;
            verify = zuuluu.bind(verify)();
            zuuluu = 'collectibles mobile shop failed to connect to native payments isIOS: ';
            verify = zuuluu + verify;
            zuuluu = 38;
            zuuluu = offset[zuuluu];
            zuuluu = option.bind(report)(zuuluu);
            option = zuuluu.isStable;
            zuuluu = ' isStable: ';
            zuuluu = verify + zuuluu;
            zuuluu = zuuluu + option;
            zuuluu = tangon.bind(oscard)(zuuluu);
 446:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot17;
            michal = {};
            foxtra = argFoo;
            backup = michal;
            oscard = copyDataProperties(backup, foxtra);
            oscard = 'storeFront';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 481:
            return entity;
        }
    };
    tangon = 39;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['CollectiblesShopV2'] = michal;
    return entity;
})();