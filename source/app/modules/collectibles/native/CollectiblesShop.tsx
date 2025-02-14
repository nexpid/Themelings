// app/modules/collectibles/native/CollectiblesShop.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun99485: for(var _fun99485_ip = 0; ; ) switch(_fun99485_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun99485_ip = 46; continue _fun99485 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun99485_ip = 55; continue _fun99485 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun99485_ip = 345; continue _fun99485 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun99485_ip = 323; continue _fun99485 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun99485_ip = 283; continue _fun99485 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun99485_ip = 270; continue _fun99485 }
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
            if(!golf) { _fun99485_ip = 163; continue _fun99485 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun99485_ip = 179; continue _fun99485 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun99485_ip = 249; continue _fun99485 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun99485_ip = 249; continue _fun99485 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun99485_ip = 234; continue _fun99485 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun99485_ip = 247; continue _fun99485 }
 234:
            verify = _closure1_slot17;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun99485_ip = 265; continue _fun99485;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun99485_ip = 283; continue _fun99485;
 270:
            golf = _closure1_slot17;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun99485_ip = 323; continue _fun99485 }
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
            if(!tango) { _fun99485_ip = 330; continue _fun99485 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun99486: for(var _fun99486_ip = 0; ; ) switch(_fun99486_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun99486_ip = 56; continue _fun99486 }
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
                    _fun99486_ip = 67; continue _fun99486;
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
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun99487: for(var _fun99487_ip = 0; ; ) switch(_fun99487_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun99487_ip = 23; continue _fun99487 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun99487_ip = 33; continue _fun99487 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun99487_ip = 70; continue _fun99487 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun99487_ip = 55; continue _fun99487 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ActivityIndicator;
    var _closure1_slot5 = options;
    options = tango.StyleSheet;
    var _closure1_slot6 = options;
    tango = tango.View;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot10 = golf;
    tango = tango.PaymentGateways;
    var _closure1_slot11 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot13 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'height': '100%', 'width': '100%'};
    tango['rootContainer'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'zIndex': 5};
    tango['blur'] = verify;
    verify = {};
    offset = 56;
    verify['height'] = offset;
    tango['header'] = verify;
    verify = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    tango['spinner'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = function() { // Original name: ListHeader
        mike = _closure1_slot14;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot12;
        mike = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = tango;
    tango = 39;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/collectibles/native/CollectiblesShop.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun99489: for(var _fun99489_ip = 0; ; ) switch(_fun99489_ip) {
 0:
            entity = argFoo;
            source = entity.analyticsSource;
            var _closure2_slot0 = source;
            control = entity.onClose;
            report = undefined;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            options = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 8;
            entity = golf[entity];
            tango = options.bind(report)(entity);
            zulu = tango.useCommonTriggerPoint;
            entity = 9;
            entity = golf[entity];
            entity = options.bind(report)(entity);
            entity = entity.CollectiblesShopOpenTriggerPoint;
            entity = zulu.bind(tango)(entity);
            entity = _closure1_slot14;
            oscar = entity.bind(report)();
            zulu = _closure1_slot1;
            entity = 10;
            entity = golf[entity];
            tango = zulu.bind(report)(entity);
            entity = {};
            verify = _closure1_slot11;
            verify = verify.APPLE;
            entity['paymentGateway'] = verify;
            verify = 'CollectiblesShop.native';
            entity['location'] = verify;
            entity = tango.bind(report)(entity);
            tango = entity.categories;
            var _closure2_slot1 = tango;
            offset = entity.isFetchingCategories;
            var _closure2_slot2 = offset;
            entity = 11;
            entity = golf[entity];
            options = options.bind(report)(entity);
            entity = options.useCollectiblesMobileBundle;
            config = entity.bind(options)(verify);
            var _closure2_slot3 = config;
            entity = 12;
            entity = golf[entity];
            options = zulu.bind(report)(entity);
            entity = 'shop_include_unpublished';
            update = options.bind(report)(entity);
            var _closure2_slot4 = update;
            yankee = _closure1_slot4;
            verify = yankee.useMemo;
            options = new Array(2);
            options[0] = tango;
            options[1] = offset;
            entity = function() {
                _fun99490: for(var _fun99490_ip = 0; ; ) switch(_fun99490_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zulu)) { _fun99490_ip = 145; continue _fun99490 }
 18:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 13;
                    entity = report[entity];
                    report = undefined;
                    tango = tango.bind(report)(entity);
                    entity = tango.isAndroid;
                    tango = entity.bind(tango)();
                    entity = false;
                    if(!(entity !== tango)) { _fun99490_ip = 145; continue _fun99490 }
 58:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zulu = _closure1_slot16;
                    tango = _closure2_slot1;
                    mike = tango.values;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun99490_ip = 143; continue _fun99490 }
 100:
                    mike = zulu.value;
                    options = mike.products;
                    golf = options.forEach;
                    mike = function(argFoo) {
                        _fun99491: for(var _fun99491_ip = 0; ; ) switch(_fun99491_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.googleSkuIds;
                            entity = undefined;
                            zulu = entity !== zulu;
                            if(!zulu) { _fun99491_ip = 30; continue _fun99491 }
 18:
                            report = mike.googleSkuIds;
                            tango = null;
                            zulu = tango !== report;
 30:
                            if(!zulu) { _fun99491_ip = 95; continue _fun99491 }
 33:
                            tango = _closure3_slot0;
                            zulu = tango.push;
                            report = global;
                            oscar = report.Object;
                            report = oscar.values;
                            mike = mike.googleSkuIds;
                            options = report.bind(oscar)(mike);
                            mike = new Array(0);
                            golf = 0;
                            verify = mike;
                            report = arraySpread(verify, options, golf);
                            verify = zulu;
                            options = mike;
                            golf = tango;
                            mike = apply(verify, options, golf);
 95:
                            return entity;
                        }
                    };
                    mike = golf.bind(options)(mike);
                    golf = tango.bind(report)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun99490_ip = 100; continue _fun99490 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            options = verify.bind(yankee)(entity, options);
            entity = 14;
            entity = golf[entity];
            golf = zulu.bind(report)(entity);
            zulu = golf.useNativeIAPPayments;
            entity = {};
            entity['productIds'] = options;
            options = true;
            options = options === offset;
            entity['fetchingProductIDs'] = options;
            zulu = zulu.bind(golf)(entity);
            record = zulu.nativePaymentsConnected;
            var _closure2_slot5 = record;
            entity = zulu.storeFront;
            verify = zulu.isFetchingNativeSKUs;
            kilo = null;
            zulu = kilo == entity;
            context = undefined;
            if(zulu) { _fun99489_ip = 339; continue _fun99489 }
 333:
            context = entity.country;
 339:
            _closure2_slot6 = context;
            backup = _closure1_slot0;
            echo = _closure1_slot2;
            entity = 15;
            entity = echo[entity];
            zulu = backup.bind(report)(entity);
            entity = zulu.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(zulu)();
            entity = 16;
            entity = echo[entity];
            zulu = backup.bind(report)(entity);
            entity = zulu.useCurrentUser;
            zulu = entity.bind(zulu)();
            _closure2_slot7 = zulu;
            entity = 17;
            entity = echo[entity];
            golf = backup.bind(report)(entity);
            entity = golf.usePurchasedCategoriesSort;
            output = entity.bind(golf)(tango);
            options = 18;
            entity = echo[options];
            romeo = backup.bind(report)(entity);
            yankee = romeo.useStateFromStores;
            entity = _closure1_slot8;
            golf = new Array(1);
            golf[0] = entity;
            entity = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 19;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isThemeDark;
                entity = _closure1_slot8;
                entity = entity.theme;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = yankee.bind(romeo)(golf, entity);
            _closure2_slot8 = entity;
            entity = 19;
            entity = echo[entity];
            golf = backup.bind(report)(entity);
            entity = golf.useThemeContext;
            entity = entity.bind(golf)();
            romeo = entity.theme;
            foxtrot = _closure1_slot1;
            entity = 20;
            golf = echo[entity];
            yankee = foxtrot.bind(report)(golf);
            golf = 21;
            golf = echo[golf];
            golf = foxtrot.bind(report)(golf);
            sizing = golf.COLLECTIBLES_SHOP;
            golf = new Array(1);
            golf[0] = sizing;
            golf = yankee.bind(report)(golf);
            golf = golf.analyticsLocations;
            _closure2_slot9 = golf;
            yankee = 22;
            yankee = echo[yankee];
            sizing = foxtrot.bind(report)(yankee);
            yankee = {};
            yankee['onClose'] = control;
            yankee = sizing.bind(report)(yankee);
            yankee = 23;
            yankee = echo[yankee];
            yankee = foxtrot.bind(report)(yankee);
            yankee = yankee.bind(report)();
            sizing = yankee.top;
            options = echo[options];
            control = backup.bind(report)(options);
            foxtrot = control.useStateFromStoresArray;
            options = _closure1_slot9;
            yankee = new Array(1);
            yankee[0] = options;
            options = function() {
                _fun99493: for(var _fun99493_ip = 0; ; ) switch(_fun99493_ip) {
 0:
                    entity = _closure1_slot9;
                    entity = entity.lastSuccessfulFetch;
                    mike = null;
                    zulu = mike != entity;
                    mike = 0;
                    if(!zulu) { _fun99493_ip = 27; continue _fun99493 }
 24:
                    mike = entity;
 27:
                    entity = new Array(1);
                    entity[0] = mike;
                    return entity;
                }
            };
            foxtrot = foxtrot.bind(control)(yankee, options);
            yankee = _closure1_slot3;
            options = 1;
            yankee = yankee.bind(report)(foxtrot, options);
            options = 0;
            foxtrot = yankee[options];
            yankee = 13;
            yankee = echo[yankee];
            backup = backup.bind(report)(yankee);
            yankee = backup.isAndroid;
            yankee = yankee.bind(backup)();
            vacuum = output;
            if(!yankee) { _fun99489_ip = 715; continue _fun99489 }
 684:
            backup = _closure1_slot0;
            echo = _closure1_slot2;
            yankee = 24;
            yankee = echo[yankee];
            backup = backup.bind(report)(yankee);
            yankee = backup.filterGPlaySyncedCategories;
            vacuum = yankee.bind(backup)(output);
 715:
            backup = _closure1_slot0;
            echo = _closure1_slot2;
            yankee = 25;
            yankee = echo[yankee];
            control = backup.bind(report)(yankee);
            output = control.useCollectiblesShopDeepLinkProps;
            yankee = {};
            yankee['categories'] = vacuum;
            yankee = output.bind(control)(yankee);
            output = yankee.categoryIndex;
            control = _closure1_slot1;
            yankee = 26;
            yankee = echo[yankee];
            control = control.bind(report)(yankee);
            yankee = 27;
            yankee = echo[yankee];
            sequence = backup.bind(report)(yankee);
            yankee = sequence.v4;
            yankee = yankee.bind(sequence)();
            yankee = control.bind(report)(yankee);
            _closure2_slot10 = yankee;
            control = _closure1_slot4;
            papa = control.useEffect;
            sequence = new Array(3);
            sequence[0] = golf;
            sequence[1] = source;
            sequence[2] = yankee;
            source = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 28;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot10;
                zulu = mike.COLLECTIBLES_SHOP_VIEWED;
                mike = {};
                golf = _closure2_slot9;
                mike['location_stack'] = golf;
                golf = _closure2_slot10;
                mike['page_session_id'] = golf;
                oscar = _closure2_slot0;
                mike['source'] = oscar;
                oscar = 'home';
                mike['page_type'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            source = papa.bind(control)(source, sequence);
            sequence = control.useEffect;
            source = new Array(4);
            source[0] = context;
            source[1] = record;
            source[2] = config;
            source[3] = update;
            update = function() {
                _fun99495: for(var _fun99495_ip = 0; ; ) switch(_fun99495_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun99495_ip = 20; continue _fun99495 }
 10:
                    zulu = _closure2_slot6;
                    mike = null;
                    entity = mike != zulu;
 20:
                    if(!entity) { _fun99495_ip = 103; continue _fun99495 }
 23:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 29;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.fetchCollectiblesCategories;
                    entity = {};
                    oscar = _closure2_slot6;
                    entity['countryCode'] = oscar;
                    report = _closure1_slot11;
                    report = report.APPLE;
                    entity['paymentGateway'] = report;
                    report = _closure2_slot3;
                    entity['includeBundles'] = report;
                    tango = _closure2_slot4;
                    entity['includeUnpublished'] = tango;
                    entity = mike.bind(zulu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            update = sequence.bind(control)(update, source);
            sequence = control.useEffect;
            source = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 30;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.lockOrientation;
                entity = 'PORTRAIT';
                entity = mike.bind(zulu)(entity);
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 30;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.unlockOrientation;
                    mike = {};
                    report = false;
                    mike['unlockAfterRotatingToPreviousLock'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                return entity;
            };
            update = new Array(0);
            update = sequence.bind(control)(source, update);
            source = control.useEffect;
            update = new Array(1);
            update[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 31;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = _closure2_slot7;
                mike = mike.id;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = source.bind(control)(zulu, update);
            zulu = global;
            update = zulu.Date;
            zulu = update.now;
            zulu = zulu.bind(update)();
            foxtrot = zulu - foxtrot;
            zulu = 32;
            zulu = echo[zulu];
            zulu = backup.bind(report)(zulu);
            zulu = zulu.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            zulu = foxtrot > zulu;
            if(offset) { _fun99489_ip = 979; continue _fun99489 }
 976:
            if(!verify) { _fun99489_ip = 997; continue _fun99489 }
 979:
            tango = tango.size;
            if(!(options !== tango)) { _fun99489_ip = 1471; continue _fun99489 }
 991:
            if(zulu) { _fun99489_ip = 1471; continue _fun99489 }
 997:
            tango = _closure1_slot12;
            update = _closure1_slot0;
            source = _closure1_slot2;
            entity = source[entity];
            entity = update.bind(report)(entity);
            zulu = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = golf;
            verify = _closure1_slot13;
            golf = 33;
            golf = source[golf];
            golf = update.bind(report)(golf);
            options = golf.CollectiblesAnalyticsProvider;
            golf = {};
            offset = {};
            offset['sessionId'] = yankee;
            golf['newValue'] = offset;
            yankee = _closure1_slot1;
            offset = 34;
            offset = source[offset];
            yankee = yankee.bind(report)(offset);
            offset = {};
            foxtrot = 0.5;
            offset['blurAmount'] = foxtrot;
            foxtrot = _closure1_slot6;
            backup = foxtrot.absoluteFill;
            foxtrot = new Array(3);
            foxtrot[0] = backup;
            backup = oscar.blur;
            foxtrot[1] = backup;
            backup = {};
            echo = 48;
            echo = echo + sizing;
            backup['height'] = echo;
            foxtrot[2] = backup;
            offset['style'] = foxtrot;
            offset['blurTheme'] = romeo;
            yankee = tango.bind(report)(yankee, offset);
            offset = new Array(2);
            offset[0] = yankee;
            romeo = _closure1_slot7;
            yankee = {};
            foxtrot = {};
            status = oscar.rootContainer;
            sierra = foxtrot;
            backup = copyDataProperties(sierra, status);
            backup = 'paddingTop';
            foxtrot[backup] = sizing;
            yankee['style'] = foxtrot;
            foxtrot = 35;
            foxtrot = source[foxtrot];
            foxtrot = update.bind(report)(foxtrot);
            backup = foxtrot.NativePaymentContextProvider;
            foxtrot = {};
            sizing = new Array(0);
            foxtrot['skuIDs'] = sizing;
            foxtrot['activeSubscription'] = kilo;
            kilo = 36;
            kilo = source[kilo];
            kilo = update.bind(report)(kilo);
            sizing = kilo.FlashList;
            kilo = {};
            echo = 37;
            control = source[echo];
            control = update.bind(report)(control);
            sequence = control.intl;
            control = sequence.string;
            echo = source[echo];
            echo = update.bind(report)(echo);
            echo = echo.t;
            echo = echo.pWG4zc;
            echo = control.bind(sequence)(echo);
            kilo['accessibilityLabel'] = echo;
            control = vacuum.filter;
            echo = function(argFoo) {
                _fun99499: for(var _fun99499_ip = 0; ; ) switch(_fun99499_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.unpublishedAt;
                    entity = null;
                    entity = entity == zulu;
                    if(entity) { _fun99499_ip = 56; continue _fun99499 }
 18:
                    zulu = mike.unpublishedAt;
                    mike = global;
                    mike = mike.Date;
                    tango = mike.prototype;
                    tango = Object.create(tango, {constructor: {value: mike}});
                    report = tango;
                    mike = new report[mike](tango);
                    mike = mike instanceof Object ? mike : tango;
                    entity = zulu > mike;
 56:
                    return entity;
                }
            };
            vacuum = control.bind(vacuum)(echo);
            control = vacuum.filter;
            echo = function(argFoo) {
                entity = argFoo;
                entity = entity.products;
                mike = entity.length;
                entity = 0;
                entity = mike > entity;
                return entity;
            };
            echo = control.bind(vacuum)(echo);
            kilo['data'] = echo;
            result = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscar = entity.item;
                report = entity.index;
                tango = _closure1_slot12;
                mike = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 38;
                entity = zulu[entity];
                zulu = undefined;
                entity = mike.bind(zulu)(entity);
                mike = entity.ShopCategory;
                entity = {};
                entity['item'] = oscar;
                oscar = _closure2_slot8;
                entity['isDarkTheme'] = oscar;
                entity['index'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            kilo['renderItem'] = result;
            result = false;
            kilo['showsVerticalScrollIndicator'] = result;
            result = 38;
            echo = source[result];
            echo = update.bind(report)(echo);
            echo = echo.CATEGORY_CONTAINER_HEIGHT;
            result = source[result];
            result = update.bind(report)(result);
            result = result.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            result = echo + result;
            kilo['estimatedItemSize'] = result;
            result = _closure1_slot15;
            kilo['ListHeaderComponent'] = result;
            kilo['initialScrollIndex'] = output;
            kilo = tango.bind(report)(sizing, kilo);
            foxtrot['children'] = kilo;
            foxtrot = tango.bind(report)(backup, foxtrot);
            yankee['children'] = foxtrot;
            yankee = tango.bind(report)(romeo, yankee);
            offset[1] = yankee;
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            entity['children'] = golf;
            entity = tango.bind(report)(zulu, entity);
            _fun99489_ip = 1505; continue _fun99489;
 1471:
            tango = _closure1_slot12;
            zulu = _closure1_slot5;
            mike = {};
            oscar = oscar.spinner;
            mike['style'] = oscar;
            oscar = 'large';
            mike['size'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 1505:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();