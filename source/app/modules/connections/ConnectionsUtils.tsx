// app/modules/connections/ConnectionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    verify = 0;
    tango = golf[verify];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    tango = tango.FormattedMessage;
    var _closure1_slot3 = tango;
    options = 1;
    tango = golf[options];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.MetadataFields;
    var _closure1_slot6 = report;
    tango = tango.OperatorTypes;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    report = tango.Permissions;
    var _closure1_slot8 = report;
    tango = tango.PlatformTypes;
    var _closure1_slot9 = tango;
    tango = {};
    tango['AND'] = verify;
    report = 'AND';
    tango[verify] = report;
    tango['OR'] = options;
    report = 'OR';
    tango[options] = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/connections/ConnectionsUtils.tsx';
    report = oscar.bind(golf)(report);
    report = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
    zulu['officialApplicationIds'] = report;
    zulu['ConnectionConfigurationRuleOperator'] = tango;
    tango = function(argFoo) { // Original name: getCallbackParamsFromURL
        _fun59545: for(var _fun59545_ip = 0; ; ) switch(_fun59545_ip) {
 0:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 5;
            entity = zulu[entity];
            options = undefined;
            zulu = mike.bind(options)(entity);
            mike = zulu.toURLSafe;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            mike = null;
            if(!(mike == entity)) { _fun59545_ip = 83; continue _fun59545 }
 45:
            mike = {};
            zulu = global;
            zulu = zulu.URLSearchParams;
            tango = zulu.prototype;
            tango = Object.create(tango, {constructor: {value: zulu}});
            kilo = tango;
            zulu = new kilo[zulu](backup);
            zulu = zulu instanceof Object ? zulu : tango;
            mike['searchParams'] = zulu;
            entity = mike;
 83:
            tango = entity.searchParams;
            entity = global;
            zulu = entity.Object;
            mike = zulu.fromEntries;
            mike = mike.bind(zulu)(tango);
            report = mike.code;
            tango = mike.state;
            zulu = mike.error;
            mike = mike.error_description;
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            oscar = 6;
            offset = verify[oscar];
            romeo = golf.bind(options)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(report);
            yankee = !offset;
            offset = 'Received multiple query param values for code';
            offset = romeo.bind(options)(yankee, offset);
            offset = verify[oscar];
            romeo = golf.bind(options)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(tango);
            yankee = !offset;
            offset = 'Received multiple query param values for state';
            offset = romeo.bind(options)(yankee, offset);
            offset = verify[oscar];
            romeo = golf.bind(options)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(zulu);
            yankee = !offset;
            offset = 'Received multiple query param values for error';
            offset = romeo.bind(options)(yankee, offset);
            oscar = verify[oscar];
            golf = golf.bind(options)(oscar);
            oscar = entity.Array;
            entity = oscar.isArray;
            entity = entity.bind(oscar)(mike);
            oscar = !entity;
            entity = 'Received multiple query param values for error_description';
            entity = golf.bind(options)(oscar, entity);
            entity = {};
            entity['code'] = report;
            entity['state'] = tango;
            entity['error'] = zulu;
            entity['errorDescription'] = mike;
            return entity;
        }
    };
    zulu['getCallbackParamsFromURL'] = tango;
    tango = function(argFoo) { // Original name: getConnectionsCheckText
        _fun59546: for(var _fun59546_ip = 0; ; ) switch(_fun59546_ip) {
 0:
            mike = argFoo;
            verify = mike.connectionType;
            options = mike.connectionMetadataField;
            golf = mike.operator;
            entity = mike.operatorText;
            yankee = mike.value;
            offset = global;
            report = offset.Math;
            zulu = report.round;
            mike = offset.Number;
            tango = undefined;
            mike = mike.bind(tango)(yankee);
            yankee = zulu.bind(report)(mike);
            var _closure2_slot0 = yankee;
            zulu = _closure1_slot7;
            zulu = zulu.EQUAL;
            if(!(zulu !== golf)) { _fun59546_ip = 316; continue _fun59546 }
 89:
            zulu = _closure1_slot7;
            zulu = zulu.NOT_EQUAL;
            if(!(zulu !== golf)) { _fun59546_ip = 283; continue _fun59546 }
 106:
            zulu = _closure1_slot7;
            zulu = zulu.LESS_THAN;
            if(!(zulu !== golf)) { _fun59546_ip = 217; continue _fun59546 }
 120:
            zulu = _closure1_slot7;
            zulu = zulu.GREATER_THAN;
            if(!(zulu !== golf)) { _fun59546_ip = 151; continue _fun59546 }
 134:
            if(!(tango !== golf)) { _fun59546_ip = 147; continue _fun59546 }
 138:
            report = null;
            if(!(report === golf)) { _fun59546_ip = 412; continue _fun59546 }
 147:
            zulu = null;
            return zulu;
 151:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 7;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(tango)(zulu);
            zulu = zulu.t;
            report = zulu.wCVDHh;
            kilo = offset.Math;
            backup = kilo.max;
            romeo = 1;
            foxtrot = yankee + romeo;
            romeo = 0;
            romeo = backup.bind(kilo)(romeo, foxtrot);
            _closure2_slot0 = romeo;
            _fun59546_ip = 412; continue _fun59546;
 217:
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 7;
            zulu = foxtrot[zulu];
            zulu = romeo.bind(tango)(zulu);
            zulu = zulu.t;
            report = zulu.3ru8/P;
            foxtrot = offset.Math;
            romeo = foxtrot.max;
            offset = 1;
            yankee = yankee - offset;
            offset = 0;
            offset = romeo.bind(foxtrot)(offset, yankee);
            _closure2_slot0 = offset;
            _fun59546_ip = 412; continue _fun59546;
 283:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 7;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            report = zulu.D9B/q6;
            _fun59546_ip = 412; continue _fun59546;
 316:
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            yankee = 7;
            zulu = zulu[yankee];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            offset = zulu.H97H4e;
            zulu = _closure1_slot9;
            zulu = zulu.PAYPAL;
            zulu = verify === zulu;
            if(!zulu) { _fun59546_ip = 378; continue _fun59546 }
 364:
            romeo = _closure1_slot6;
            romeo = romeo.PAYPAL_VERIFIED;
            zulu = options === romeo;
 378:
            report = offset;
            if(!zulu) { _fun59546_ip = 412; continue _fun59546 }
 384:
            offset = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[yankee];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            report = zulu.N95b+f;
 412:
            zulu = null;
            if(!(zulu != entity)) { _fun59546_ip = 421; continue _fun59546 }
 418:
            report = entity;
 421:
            entity = _closure1_slot3;
            offset = report instanceof entity;
            entity = report;
            if(!offset) { _fun59546_ip = 2124; continue _fun59546 }
 438:
            entity = report;
            if(!(zulu != golf)) { _fun59546_ip = 2124; continue _fun59546 }
 448:
            golf = _closure1_slot9;
            golf = golf.REDDIT;
            if(!(golf !== verify)) { _fun59546_ip = 1859; continue _fun59546 }
 465:
            golf = _closure1_slot9;
            golf = golf.STEAM;
            if(!(golf !== verify)) { _fun59546_ip = 1583; continue _fun59546 }
 482:
            golf = _closure1_slot9;
            golf = golf.TWITTER;
            if(!(golf !== verify)) { _fun59546_ip = 1307; continue _fun59546 }
 499:
            golf = _closure1_slot9;
            golf = golf.PAYPAL;
            if(!(golf !== verify)) { _fun59546_ip = 1171; continue _fun59546 }
 516:
            golf = _closure1_slot9;
            golf = golf.EBAY;
            if(!(golf !== verify)) { _fun59546_ip = 825; continue _fun59546 }
 533:
            golf = _closure1_slot9;
            golf = golf.TIKTOK;
            if(!(golf !== verify)) { _fun59546_ip = 549; continue _fun59546 }
 547:
            return zulu;
 549:
            golf = _closure1_slot6;
            golf = golf.TIKTOK_VERIFIED;
            if(!(golf !== options)) { _fun59546_ip = 772; continue _fun59546 }
 566:
            golf = _closure1_slot6;
            golf = golf.TIKTOK_FOLLOWER_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 719; continue _fun59546 }
 583:
            golf = _closure1_slot6;
            golf = golf.TIKTOK_FOLLOWING_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 666; continue _fun59546 }
 597:
            golf = _closure1_slot6;
            golf = golf.TIKTOK_LIKES_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 613; continue _fun59546 }
 611:
            return zulu;
 613:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.ar0WW1;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 666:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.zRta4e;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 719:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.qIPDR0;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 772:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.uv7et7;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 825:
            golf = _closure1_slot6;
            golf = golf.CREATED_AT;
            if(!(golf !== options)) { _fun59546_ip = 1118; continue _fun59546 }
 842:
            golf = _closure1_slot6;
            golf = golf.EBAY_TOP_RATED_SELLER;
            if(!(golf !== options)) { _fun59546_ip = 1065; continue _fun59546 }
 859:
            golf = _closure1_slot6;
            golf = golf.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            if(!(golf !== options)) { _fun59546_ip = 1012; continue _fun59546 }
 876:
            golf = _closure1_slot6;
            golf = golf.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 959; continue _fun59546 }
 890:
            golf = _closure1_slot6;
            golf = golf.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 906; continue _fun59546 }
 904:
            return zulu;
 906:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.6ZFYdH;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 959:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.QP5W1d;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1012:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.rl9Vg4;
                entity = {};
                report = _closure2_slot0;
                entity['value'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1065:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.TEEYwc;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1118:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1171:
            golf = _closure1_slot6;
            golf = golf.CREATED_AT;
            if(!(golf !== options)) { _fun59546_ip = 1254; continue _fun59546 }
 1185:
            golf = _closure1_slot6;
            golf = golf.PAYPAL_VERIFIED;
            if(!(golf !== options)) { _fun59546_ip = 1201; continue _fun59546 }
 1199:
            return zulu;
 1201:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.slSQuL;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1254:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1307:
            golf = _closure1_slot6;
            golf = golf.CREATED_AT;
            if(!(golf !== options)) { _fun59546_ip = 1530; continue _fun59546 }
 1324:
            golf = _closure1_slot6;
            golf = golf.TWITTER_VERIFIED;
            if(!(golf !== options)) { _fun59546_ip = 1477; continue _fun59546 }
 1341:
            golf = _closure1_slot6;
            golf = golf.TWITTER_FOLLOWERS_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 1424; continue _fun59546 }
 1355:
            golf = _closure1_slot6;
            golf = golf.TWITTER_STATUSES_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 1371; continue _fun59546 }
 1369:
            return zulu;
 1371:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.MI7NKi;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1424:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.bkajam;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1477:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.xRygZG;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1530:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1583:
            golf = _closure1_slot6;
            golf = golf.CREATED_AT;
            if(!(golf !== options)) { _fun59546_ip = 1806; continue _fun59546 }
 1600:
            golf = _closure1_slot6;
            golf = golf.STEAM_GAME_COUNT;
            if(!(golf !== options)) { _fun59546_ip = 1753; continue _fun59546 }
 1617:
            golf = _closure1_slot6;
            golf = golf.STEAM_ITEM_COUNT_TF2;
            if(!(golf !== options)) { _fun59546_ip = 1700; continue _fun59546 }
 1631:
            golf = _closure1_slot6;
            golf = golf.STEAM_ITEM_COUNT_DOTA2;
            if(!(golf !== options)) { _fun59546_ip = 1647; continue _fun59546 }
 1645:
            return zulu;
 1647:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.dMnRam;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1700:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.MceZJy;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1753:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.H9eLoa;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1806:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = 7;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            offset = golf.intl;
            verify = offset.format;
            golf = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golf);
            _fun59546_ip = 2124; continue _fun59546;
 1859:
            golf = _closure1_slot6;
            golf = golf.CREATED_AT;
            if(!(golf !== options)) { _fun59546_ip = 2076; continue _fun59546 }
 1876:
            golf = _closure1_slot6;
            golf = golf.REDDIT_TOTAL_KARMA;
            if(!(golf !== options)) { _fun59546_ip = 2026; continue _fun59546 }
 1893:
            golf = _closure1_slot6;
            golf = golf.REDDIT_GOLD;
            if(!(golf !== options)) { _fun59546_ip = 1976; continue _fun59546 }
 1907:
            golf = _closure1_slot6;
            golf = golf.REDDIT_MOD;
            if(!(golf !== options)) { _fun59546_ip = 1923; continue _fun59546 }
 1921:
            return zulu;
 1923:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            options = zulu.intl;
            golf = options.format;
            zulu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.9rPbEh;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['platformQuantityHook'] = verify;
            entity = golf.bind(options)(report, zulu);
            _fun59546_ip = 2124; continue _fun59546;
 1976:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            options = zulu.intl;
            golf = options.format;
            zulu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.intl;
                mike = zulu.string;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.t;
                entity = entity.+/5TCw;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu['platformQuantityHook'] = verify;
            entity = golf.bind(options)(report, zulu);
            _fun59546_ip = 2124; continue _fun59546;
 2026:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 7;
            zulu = options[zulu];
            zulu = golf.bind(tango)(zulu);
            options = zulu.intl;
            golf = options.format;
            zulu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.P2JAER;
                entity = {};
                report = _closure2_slot0;
                entity['karma'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu['platformQuantityHook'] = verify;
            entity = golf.bind(options)(report, zulu);
            _fun59546_ip = 2124; continue _fun59546;
 2076:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 7;
            mike = golf[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.intl;
            zulu = tango.format;
            mike = {};
            oscar = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                tango = zulu.intl;
                zulu = tango.formatToPlainString;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                entity = entity.t;
                mike = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike['platformQuantityHook'] = oscar;
            entity = zulu.bind(tango)(report, mike);
 2124:
            return entity;
        }
    };
    zulu['getConnectionsCheckText'] = tango;
    tango = function(argFoo, argBar) { // Original name: isVerifiedRolesChannelVisible
        entity = global;
        zulu = entity.Object;
        mike = zulu.values;
        entity = argBar;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.some;
        entity = function(argFoo) {
            _fun59571: for(var _fun59571_ip = 0; ; ) switch(_fun59571_ip) {
 0:
                entity = argFoo;
                zulu = entity.tags;
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun59571_ip = 26; continue _fun59571 }
 20:
                entity = zulu.guild_connections;
 26:
                entity = mike === entity;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isVerifiedRolesChannelVisible'] = tango;
    tango = function(argFoo) { // Original name: getVisibleConnectionsRole
        _fun59572: for(var _fun59572_ip = 0; ; ) switch(_fun59572_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildMember;
            report = entity.guild;
            tango = entity.guildRoles;
            var _closure2_slot0 = tango;
            options = entity.channel;
            oscar = entity.onlyChannelConnectionRoles;
            golf = undefined;
            if(!(oscar === golf)) { _fun59572_ip = 45; continue _fun59572 }
 43:
            oscar = false;
 45:
            entity = null;
            if(!(entity != zulu)) { _fun59572_ip = 297; continue _fun59572 }
 54:
            verify = entity == report;
            if(!verify) { _fun59572_ip = 65; continue _fun59572 }
 61:
            verify = entity != options;
 65:
            if(!verify) { _fun59572_ip = 95; continue _fun59572 }
 68:
            yankee = _closure1_slot4;
            offset = yankee.getGuild;
            verify = options.getGuildId;
            verify = verify.bind(options)();
            report = offset.bind(yankee)(verify);
 95:
            if(!(entity != report)) { _fun59572_ip = 295; continue _fun59572 }
 102:
            verify = report.id;
            if(!(entity == tango)) { _fun59572_ip = 133; continue _fun59572 }
 111:
            report = _closure1_slot4;
            tango = report.getRoles;
            tango = tango.bind(report)(verify);
            _closure2_slot0 = tango;
 133:
            report = zulu.roles;
            tango = report.map;
            zulu = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = mike[entity];
                return entity;
            };
            report = tango.bind(report)(zulu);
            tango = report.filter;
            zulu = function(argFoo) {
                _fun59574: for(var _fun59574_ip = 0; ; ) switch(_fun59574_ip) {
 0:
                    zulu = argFoo;
                    mike = null;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun59574_ip = 35; continue _fun59574 }
 14:
                    zulu = zulu.tags;
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun59574_ip = 35; continue _fun59574 }
 29:
                    entity = zulu.guild_connections;
 35:
                    entity = mike === entity;
                    return entity;
                }
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.sort;
            mike = function(argFoo, argBar) {
                _fun59575: for(var _fun59575_ip = 0; ; ) switch(_fun59575_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 6;
                    zulu = report[zulu];
                    oscar = undefined;
                    report = tango.bind(oscar)(zulu);
                    zulu = null;
                    tango = zulu != entity;
                    if(!tango) { _fun59575_ip = 44; continue _fun59575 }
 40:
                    tango = zulu != mike;
 44:
                    zulu = 'roleA or roleB is null';
                    zulu = report.bind(oscar)(tango, zulu);
                    mike = mike.position;
                    entity = entity.position;
                    entity = mike - entity;
                    return entity;
                }
            };
            report = zulu.bind(tango)(mike);
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 8;
            mike = offset[mike];
            tango = verify.bind(golf)(mike);
            zulu = tango.intersection;
            mike = 9;
            mike = offset[mike];
            mike = verify.bind(golf)(mike);
            mike = mike.bind(golf)(options);
            tango = zulu.bind(tango)(report, mike);
            mike = tango.length;
            zulu = 0;
            if(!(!(mike > zulu))) { _fun59572_ip = 274; continue _fun59572 }
 248:
            mike = null;
            if(oscar) { _fun59572_ip = 272; continue _fun59572 }
 253:
            oscar = report[zulu];
            golf = entity != oscar;
            report = null;
            if(!golf) { _fun59572_ip = 269; continue _fun59572 }
 266:
            report = oscar;
 269:
            mike = report;
 272:
            _fun59572_ip = 293; continue _fun59572;
 274:
            tango = tango[zulu];
            report = entity != tango;
            zulu = null;
            if(!report) { _fun59572_ip = 290; continue _fun59572 }
 287:
            zulu = tango;
 290:
            mike = zulu;
 293:
            return mike;
 295:
            return entity;
 297:
            return entity;
        }
    };
    zulu['getVisibleConnectionsRole'] = tango;
    tango = function(argFoo, argBar) { // Original name: getCreatedAtDate
        _fun59576: for(var _fun59576_ip = 0; ; ) switch(_fun59576_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun59576_ip = 118; continue _fun59576 }
 9:
            mike = '';
            if(!(mike !== report)) { _fun59576_ip = 118; continue _fun59576 }
 17:
            zulu = global;
            mike = zulu.Date;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            verify = tango;
            options = report;
            mike = new verify[mike](options, golf);
            oscar = mike instanceof Object ? mike : tango;
            mike = zulu.Date;
            tango = oscar instanceof mike;
            mike = null;
            if(!tango) { _fun59576_ip = 116; continue _fun59576 }
 63:
            report = zulu.isNaN;
            zulu = oscar.getTime;
            tango = zulu.bind(oscar)();
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            mike = null;
            if(zulu) { _fun59576_ip = 116; continue _fun59576 }
 91:
            report = oscar.toLocaleDateString;
            tango = argBar;
            zulu = {'month': 'short', 'day': 'numeric', 'year': 'numeric'};
            mike = report.bind(oscar)(tango, zulu);
 116:
            return mike;
 118:
            return entity;
        }
    };
    zulu['getCreatedAtDate'] = tango;
    mike = function(argFoo) { // Original name: useShowLinkedRolesAdminNux
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 10;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot4;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot5;
        mike[1] = report;
        entity = function() {
            _fun59578: for(var _fun59578_ip = 0; ; ) switch(_fun59578_ip) {
 0:
                entity = global;
                tango = entity.Object;
                zulu = tango.values;
                golf = _closure1_slot4;
                report = golf.getRoles;
                oscar = _closure2_slot0;
                entity = oscar.id;
                entity = report.bind(golf)(entity);
                tango = zulu.bind(tango)(entity);
                zulu = tango.some;
                entity = function(argFoo) {
                    _fun59579: for(var _fun59579_ip = 0; ; ) switch(_fun59579_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.tags;
                        mike = null;
                        tango = mike == zulu;
                        entity = undefined;
                        if(tango) { _fun59579_ip = 26; continue _fun59579 }
 20:
                        entity = zulu.guild_connections;
 26:
                        entity = mike === entity;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                options = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 11;
                zulu = verify[zulu];
                golf = undefined;
                report = options.bind(golf)(zulu);
                tango = report.isDismissibleContentDismissed;
                zulu = 12;
                zulu = verify[zulu];
                zulu = options.bind(golf)(zulu);
                zulu = zulu.DismissibleContent;
                zulu = zulu.CONNECTIONS_NUX;
                zulu = tango.bind(report)(zulu);
                report = _closure1_slot5;
                tango = report.can;
                mike = _closure1_slot8;
                mike = mike.MANAGE_ROLES;
                mike = tango.bind(report)(mike, oscar);
                entity = !entity;
                if(!entity) { _fun59578_ip = 158; continue _fun59578 }
 155:
                entity = zulu;
 158:
                if(!entity) { _fun59578_ip = 164; continue _fun59578 }
 161:
                entity = mike;
 164:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useShowLinkedRolesAdminNux'] = mike;
    return entity;
})();