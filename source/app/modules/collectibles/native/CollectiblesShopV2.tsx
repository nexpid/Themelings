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
            ctrled = entity.onClose;
            entity = entity.storeFront;
            oscard = undefined;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            var _closure2_slot6 = oscard;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 9;
            michal = offset[michal];
            report = option.bind(oscard)(michal);
            tangon = report.useCommonTriggerPoint;
            michal = 10;
            michal = offset[michal];
            michal = option.bind(oscard)(michal);
            michal = michal.CollectiblesShopOpenTriggerPoint;
            michal = tangon.bind(report)(michal);
            michal = 11;
            michal = offset[michal];
            report = option.bind(oscard)(michal);
            tangon = report.useMobileCanPurchaseNameplates;
            michal = 'CollectiblesShop';
            romeon = tangon.bind(report)(michal);
            michal = 12;
            tangon = offset[michal];
            verify = option.bind(oscard)(tangon);
            golfie = verify.useStateFromStoresArray;
            tangon = _closure1_slot10;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
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
            golfie = golfie.bind(verify)(report, tangon);
            report = _closure1_slot3;
            tangon = 1;
            tangon = report.bind(oscard)(golfie, tangon);
            verify = 0;
            tangon = tangon[verify];
            report = global;
            golfie = report.Date;
            report = golfie.now;
            report = report.bind(golfie)();
            golfie = report - tangon;
            report = 13;
            report = offset[report];
            report = option.bind(oscard)(report);
            report = report.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            backup = golfie > report;
            report = _closure1_slot15;
            golfie = report.bind(oscard)();
            result = null;
            report = result == entity;
            yankee = undefined;
            if(report) { _fun00008_ip = 264; continue _fun00007 }
 258:
            yankee = entity.country;
 264:
            report = _closure1_slot1;
            option = _closure1_slot2;
            entity = 14;
            entity = option[entity];
            report = report.bind(oscard)(entity);
            entity = {};
            option = _closure1_slot12;
            option = option.APPLE;
            entity['paymentGateway'] = option;
            if(!(result == yankee)) { _fun00008_ip = 309; continue _fun00007 }
 305:
            option = {};
            _fun00008_ip = 319; continue _fun00007;
 309:
            offset = {};
            offset['countryCode'] = yankee;
            option = offset;
 319:
            papara = entity;
            cntext = option;
            option = copyDataProperties(papara, cntext);
            offset = 'CollectiblesShop.native';
            option = 'location';
            entity[option] = offset;
            entity = report.bind(oscard)(entity);
            report = entity.categories;
            _closure2_slot1 = report;
            foxtra = entity.isFetchingCategories;
            _closure2_slot2 = foxtra;
            yankee = _closure1_slot4;
            offset = yankee.useMemo;
            option = new Array(2);
            option[0] = report;
            option[1] = foxtra;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00012_ip = 145; continue _fun00011 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 15;
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
            yankee = offset.bind(yankee)(entity, option);
            echoed = _closure1_slot1;
            sequen = _closure1_slot2;
            entity = 16;
            entity = sequen[entity];
            offset = echoed.bind(oscard)(entity);
            option = offset.useGoogleSkuIds;
            entity = true;
            entity = entity === foxtra;
            entity = option.bind(offset)(yankee, entity);
            yankee = entity.isFetchingGoogleSkus;
            offset = entity.fetchError;
            vacuum = _closure1_slot0;
            entity = 17;
            entity = sequen[entity];
            option = vacuum.bind(oscard)(entity);
            entity = option.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(option)();
            entity = 18;
            entity = sequen[entity];
            option = vacuum.bind(oscard)(entity);
            entity = option.useCurrentUserIfAvailable;
            entity = entity.bind(option)();
            _closure2_slot3 = entity;
            option = 19;
            option = sequen[option];
            kiloes = vacuum.bind(oscard)(option);
            option = kiloes.usePurchasedCategoriesSort;
            config = option.bind(kiloes)(report);
            michal = sequen[michal];
            output = vacuum.bind(oscard)(michal);
            kiloes = output.useStateFromStores;
            michal = _closure1_slot8;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
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
            michal = kiloes.bind(output)(option, michal);
            _closure2_slot4 = michal;
            michal = 20;
            michal = sequen[michal];
            option = vacuum.bind(oscard)(michal);
            michal = option.useThemeContext;
            michal = michal.bind(option)();
            kiloes = michal.theme;
            michal = 21;
            option = sequen[michal];
            output = echoed.bind(oscard)(option);
            option = 22;
            option = sequen[option];
            option = echoed.bind(oscard)(option);
            update = option.COLLECTIBLES_SHOP;
            option = new Array(1);
            option[0] = update;
            option = output.bind(oscard)(option);
            option = option.analyticsLocations;
            _closure2_slot5 = option;
            output = 23;
            output = sequen[output];
            update = echoed.bind(oscard)(output);
            output = {};
            output['onClose'] = ctrled;
            output = update.bind(oscard)(output);
            output = 24;
            output = sequen[output];
            output = echoed.bind(oscard)(output);
            output = output.bind(oscard)();
            echoed = output.top;
            record = 25;
            output = sequen[record];
            ctrled = vacuum.bind(oscard)(output);
            update = ctrled.filterHiddenCategories;
            output = !romeon;
            romeon = 15;
            romeon = sequen[romeon];
            vacuum = vacuum.bind(oscard)(romeon);
            romeon = vacuum.isAndroid;
            vacuum = romeon.bind(vacuum)();
            romeon = config;
            if(!vacuum) { _fun00008_ip = 772; continue _fun00007 }
 744:
            sequen = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[record];
            sequen = sequen.bind(oscard)(vacuum);
            vacuum = sequen.filterGPlaySyncedCategories;
            romeon = vacuum.bind(sequen)(config);
 772:
            ctrled = update.bind(ctrled)(output, romeon);
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            romeon = 26;
            romeon = sequen[romeon];
            update = vacuum.bind(oscard)(romeon);
            output = update.useCollectiblesShopDeepLinkProps;
            romeon = {};
            romeon['categories'] = ctrled;
            romeon = output.bind(update)(romeon);
            update = romeon.categoryIndex;
            output = _closure1_slot1;
            romeon = 27;
            romeon = sequen[romeon];
            output = output.bind(oscard)(romeon);
            romeon = 28;
            romeon = sequen[romeon];
            vacuum = vacuum.bind(oscard)(romeon);
            romeon = vacuum.v4;
            romeon = romeon.bind(vacuum)();
            romeon = output.bind(oscard)(romeon);
            _closure2_slot6 = romeon;
            sequen = _closure1_slot4;
            vacuum = sequen.useEffect;
            output = new Array(3);
            output[0] = option;
            output[1] = sizing;
            output[2] = romeon;
            sizing = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 29;
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
            sizing = vacuum.bind(sequen)(sizing, output);
            vacuum = sequen.useEffect;
            output = new Array(1);
            output[0] = entity;
            sizing = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00016_ip = 52; continue _fun00015 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 30;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot3;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 52:
                    entity = undefined;
                    return entity;
                }
            };
            sizing = vacuum.bind(sequen)(sizing, output);
            sizing = result == entity;
            entity = null;
            if(sizing) { _fun00008_ip = 1580; continue _fun00007 }
 945:
            sizing = ctrled.length;
            if(!(verify !== sizing)) { _fun00008_ip = 957; continue _fun00007 }
 954:
            if(!backup) { _fun00008_ip = 969; continue _fun00007 }
 957:
            if(foxtra) { _fun00008_ip = 1543; continue _fun00007 }
 963:
            if(yankee) { _fun00008_ip = 1543; continue _fun00007 }
 969:
            tangon = tangon > verify;
            if(!tangon) { _fun00008_ip = 982; continue _fun00007 }
 976:
            yankee = false;
            tangon = yankee === foxtra;
 982:
            if(!tangon) { _fun00008_ip = 994; continue _fun00007 }
 985:
            report = report.size;
            tangon = verify === report;
 994:
            if(!tangon) { _fun00008_ip = 1034; continue _fun00007 }
 997:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 31;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop loaded empty categories';
            tangon = report.bind(verify)(tangon);
 1034:
            if(!(result !== offset)) { _fun00008_ip = 1079; continue _fun00007 }
 1038:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 31;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop failed to fetch google sku ids: ';
            tangon = tangon + offset;
            tangon = report.bind(verify)(tangon);
 1079:
            report = _closure1_slot13;
            vacuum = _closure1_slot0;
            backup = _closure1_slot2;
            michal = backup[michal];
            michal = vacuum.bind(oscard)(michal);
            tangon = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = option;
            offset = _closure1_slot14;
            option = 32;
            option = backup[option];
            option = vacuum.bind(oscard)(option);
            verify = option.CollectiblesAnalyticsProvider;
            option = {};
            yankee = {};
            yankee['sessionId'] = romeon;
            option['newValue'] = yankee;
            foxtra = _closure1_slot1;
            yankee = 33;
            yankee = backup[yankee];
            romeon = foxtra.bind(oscard)(yankee);
            yankee = {};
            sizing = 0.5;
            yankee['blurAmount'] = sizing;
            sizing = _closure1_slot6;
            output = sizing.absoluteFill;
            sizing = new Array(3);
            sizing[0] = output;
            output = golfie.blur;
            sizing[1] = output;
            output = {};
            sequen = 48;
            sequen = sequen + echoed;
            output['height'] = sequen;
            sizing[2] = output;
            yankee['style'] = sizing;
            yankee['blurTheme'] = kiloes;
            romeon = report.bind(oscard)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            kiloes = _closure1_slot7;
            romeon = {};
            sizing = {};
            cntext = golfie.rootContainer;
            papara = sizing;
            output = copyDataProperties(papara, cntext);
            output = 'paddingTop';
            sizing[output] = echoed;
            romeon['style'] = sizing;
            sizing = 34;
            sizing = backup[sizing];
            sizing = vacuum.bind(oscard)(sizing);
            output = sizing.NativePaymentContextProvider;
            sizing = {};
            echoed = new Array(0);
            sizing['skuIDs'] = echoed;
            sizing['activeSubscription'] = result;
            result = 35;
            result = backup[result];
            result = vacuum.bind(oscard)(result);
            echoed = result.FlashList;
            result = {};
            sequen = 36;
            config = backup[sequen];
            config = vacuum.bind(oscard)(config);
            record = config.intl;
            config = record.string;
            sequen = backup[sequen];
            sequen = vacuum.bind(oscard)(sequen);
            sequen = sequen.t;
            sequen = sequen.pWG4zc;
            sequen = config.bind(record)(sequen);
            result['accessibilityLabel'] = sequen;
            result['data'] = ctrled;
            source = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot13;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 37;
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
            result['renderItem'] = source;
            source = false;
            result['showsVerticalScrollIndicator'] = source;
            source = 37;
            ctrled = backup[source];
            ctrled = vacuum.bind(oscard)(ctrled);
            ctrled = ctrled.CATEGORY_CONTAINER_HEIGHT;
            source = backup[source];
            source = vacuum.bind(oscard)(source);
            source = source.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            source = ctrled + source;
            result['estimatedItemSize'] = source;
            source = _closure1_slot16;
            result['ListHeaderComponent'] = source;
            result['initialScrollIndex'] = update;
            result = report.bind(oscard)(echoed, result);
            sizing['children'] = result;
            sizing = report.bind(oscard)(output, sizing);
            romeon['children'] = sizing;
            romeon = report.bind(oscard)(kiloes, romeon);
            yankee[1] = romeon;
            romeon = 38;
            romeon = backup[romeon];
            foxtra = foxtra.bind(oscard)(romeon);
            romeon = {};
            romeon = report.bind(oscard)(foxtra, romeon);
            yankee[2] = romeon;
            option['children'] = yankee;
            option = offset.bind(oscard)(verify, option);
            michal['children'] = option;
            michal = report.bind(oscard)(tangon, michal);
            _fun00008_ip = 1577; continue _fun00007;
 1543:
            report = _closure1_slot13;
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = golfie.spinner;
            zuuluu['style'] = golfie;
            golfie = 'large';
            zuuluu['size'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 1577:
            entity = michal;
 1580:
            return entity;
        }
    };
    var _closure1_slot17 = tangon;
    michal = function(argFoo) { // Original name: CollectiblesShopV2
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 16;
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
            zuuluu = 12;
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
            if(tangon) { _fun00018_ip = 128; continue _fun00017 }
 118:
            tangon = verify.isStaff;
            option = tangon.bind(verify)();
 128:
            if(option) { _fun00018_ip = 153; continue _fun00017 }
 131:
            tangon = zuuluu == verify;
            zuuluu = undefined;
            if(tangon) { _fun00018_ip = 150; continue _fun00017 }
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
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    if(zuuluu) { _fun00020_ip = 54; continue _fun00019 }
 14:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            michal = _closure2_slot0;
                            if(michal) { _fun00022_ip = 23; continue _fun00021 }
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
            zuuluu = 15;
            entity = entity[zuuluu];
            verify = verify.bind(report)(entity);
            entity = verify.isIOS;
            entity = entity.bind(verify)();
            if(!entity) { _fun00018_ip = 287; continue _fun00017 }
 258:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 39;
            verify = romeon[verify];
            verify = yankee.bind(report)(verify);
            verify = verify.isStable;
            entity = !verify;
 287:
            if(!entity) { _fun00018_ip = 293; continue _fun00017 }
 290:
            entity = option;
 293:
            if(oscard) { _fun00018_ip = 341; continue _fun00017 }
 296:
            if(entity) { _fun00018_ip = 341; continue _fun00017 }
 299:
            if(tangon) { _fun00018_ip = 341; continue _fun00017 }
 302:
            verify = _closure1_slot13;
            option = _closure1_slot5;
            entity = {};
            offset = offset.spinner;
            entity['style'] = offset;
            offset = 'large';
            entity['size'] = offset;
            entity = verify.bind(report)(option, entity);
            _fun00018_ip = 481; continue _fun00017;
 341:
            if(!tangon) { _fun00018_ip = 347; continue _fun00017 }
 344:
            tangon = !oscard;
 347:
            if(!tangon) { _fun00018_ip = 446; continue _fun00017 }
 350:
            oscard = _closure1_slot1;
            offset = _closure1_slot2;
            tangon = 31;
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
            zuuluu = 39;
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
    tangon = 40;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['CollectiblesShopV2'] = michal;
    return entity;
})();