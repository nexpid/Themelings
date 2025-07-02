// app/modules/connections/ConnectionsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    verify = 0;
    tangon = golfie[verify];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.FormattedMessage;
    var _closure1_slot3 = tangon;
    option = 1;
    tangon = golfie[option];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.MetadataFields;
    var _closure1_slot7 = report;
    tangon = tangon.OperatorTypes;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.Permissions;
    var _closure1_slot9 = report;
    tangon = tangon.PlatformTypes;
    var _closure1_slot10 = tangon;
    tangon = {};
    tangon['AND'] = verify;
    report = 'AND';
    tangon[verify] = report;
    tangon['OR'] = option;
    report = 'OR';
    tangon[option] = report;
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/connections/ConnectionsUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
    zuuluu['officialApplicationIds'] = report;
    zuuluu['ConnectionConfigurationRuleOperator'] = tangon;
    tangon = function(argFoo) { // Original name: getCallbackParamsFromURL
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 6;
            entity = zuuluu[entity];
            option = undefined;
            zuuluu = michal.bind(option)(entity);
            michal = zuuluu.toURLSafe;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 83; continue _fun00001 }
 45:
            michal = {};
            zuuluu = global;
            zuuluu = zuuluu.URLSearchParams;
            tangon = zuuluu.prototype;
            tangon = Object.create(tangon, {constructor: {value: zuuluu}});
            kiloes = tangon;
            zuuluu = new kiloes[zuuluu](backup);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            michal['searchParams'] = zuuluu;
            entity = michal;
 83:
            tangon = entity.searchParams;
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.fromEntries;
            michal = michal.bind(zuuluu)(tangon);
            report = michal.code;
            tangon = michal.state;
            zuuluu = michal.error;
            michal = michal.error_description;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            oscard = 7;
            offset = verify[oscard];
            romeon = golfie.bind(option)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(report);
            yankee = !offset;
            offset = 'Received multiple query param values for code';
            offset = romeon.bind(option)(yankee, offset);
            offset = verify[oscard];
            romeon = golfie.bind(option)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(tangon);
            yankee = !offset;
            offset = 'Received multiple query param values for state';
            offset = romeon.bind(option)(yankee, offset);
            offset = verify[oscard];
            romeon = golfie.bind(option)(offset);
            yankee = entity.Array;
            offset = yankee.isArray;
            offset = offset.bind(yankee)(zuuluu);
            yankee = !offset;
            offset = 'Received multiple query param values for error';
            offset = romeon.bind(option)(yankee, offset);
            oscard = verify[oscard];
            golfie = golfie.bind(option)(oscard);
            oscard = entity.Array;
            entity = oscard.isArray;
            entity = entity.bind(oscard)(michal);
            oscard = !entity;
            entity = 'Received multiple query param values for error_description';
            entity = golfie.bind(option)(oscard, entity);
            entity = {};
            entity['code'] = report;
            entity['state'] = tangon;
            entity['error'] = zuuluu;
            entity['errorDescription'] = michal;
            return entity;
        }
    };
    zuuluu['getCallbackParamsFromURL'] = tangon;
    tangon = function(argFoo) { // Original name: getConnectionsCheckText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            verify = michal.connectionType;
            option = michal.connectionMetadataField;
            golfie = michal.operator;
            entity = michal.operatorText;
            yankee = michal.value;
            offset = global;
            report = offset.Math;
            zuuluu = report.round;
            michal = offset.Number;
            tangon = undefined;
            michal = michal.bind(tangon)(yankee);
            yankee = zuuluu.bind(report)(michal);
            var _closure2_slot0 = yankee;
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.EQUAL;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 322; continue _fun00003 }
 89:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.NOT_EQUAL;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 287; continue _fun00003 }
 106:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.LESS_THAN;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 219; continue _fun00003 }
 120:
            zuuluu = _closure1_slot8;
            zuuluu = zuuluu.GREATER_THAN;
            if(!(zuuluu !== golfie)) { _fun00004_ip = 151; continue _fun00003 }
 134:
            if(!(tangon !== golfie)) { _fun00004_ip = 147; continue _fun00003 }
 138:
            report = null;
            if(!(report === golfie)) { _fun00004_ip = 422; continue _fun00003 }
 147:
            zuuluu = null;
            return zuuluu;
 151:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 8;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.wCVDHh;
            kiloes = offset.Math;
            backup = kiloes.max;
            romeon = 1;
            foxtra = yankee + romeon;
            romeon = 0;
            romeon = backup.bind(kiloes)(romeon, foxtra);
            _closure2_slot0 = romeon;
            _fun00004_ip = 422; continue _fun00003;
 219:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 8;
            zuuluu = foxtra[zuuluu];
            zuuluu = romeon.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.3ru8/P;
            foxtra = offset.Math;
            romeon = foxtra.max;
            offset = 1;
            yankee = yankee - offset;
            offset = 0;
            offset = romeon.bind(foxtra)(offset, yankee);
            _closure2_slot0 = offset;
            _fun00004_ip = 422; continue _fun00003;
 287:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 8;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.D9B/q6;
            _fun00004_ip = 422; continue _fun00003;
 322:
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            yankee = 8;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            offset = zuuluu.H97H4e;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.PAYPAL;
            zuuluu = verify === zuuluu;
            if(!zuuluu) { _fun00004_ip = 386; continue _fun00003 }
 372:
            romeon = _closure1_slot7;
            romeon = romeon.PAYPAL_VERIFIED;
            zuuluu = option === romeon;
 386:
            report = offset;
            if(!zuuluu) { _fun00004_ip = 422; continue _fun00003 }
 392:
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            report = zuuluu.N95b+f;
 422:
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00004_ip = 431; continue _fun00003 }
 428:
            report = entity;
 431:
            entity = _closure1_slot3;
            offset = report instanceof entity;
            entity = report;
            if(!offset) { _fun00004_ip = 2134; continue _fun00003 }
 448:
            entity = report;
            if(!(zuuluu != golfie)) { _fun00004_ip = 2134; continue _fun00003 }
 458:
            golfie = _closure1_slot10;
            golfie = golfie.REDDIT;
            if(!(golfie !== verify)) { _fun00004_ip = 1869; continue _fun00003 }
 475:
            golfie = _closure1_slot10;
            golfie = golfie.STEAM;
            if(!(golfie !== verify)) { _fun00004_ip = 1593; continue _fun00003 }
 492:
            golfie = _closure1_slot10;
            golfie = golfie.TWITTER;
            if(!(golfie !== verify)) { _fun00004_ip = 1317; continue _fun00003 }
 509:
            golfie = _closure1_slot10;
            golfie = golfie.PAYPAL;
            if(!(golfie !== verify)) { _fun00004_ip = 1181; continue _fun00003 }
 526:
            golfie = _closure1_slot10;
            golfie = golfie.EBAY;
            if(!(golfie !== verify)) { _fun00004_ip = 835; continue _fun00003 }
 543:
            golfie = _closure1_slot10;
            golfie = golfie.TIKTOK;
            if(!(golfie !== verify)) { _fun00004_ip = 559; continue _fun00003 }
 557:
            return zuuluu;
 559:
            golfie = _closure1_slot7;
            golfie = golfie.TIKTOK_VERIFIED;
            if(!(golfie !== option)) { _fun00004_ip = 782; continue _fun00003 }
 576:
            golfie = _closure1_slot7;
            golfie = golfie.TIKTOK_FOLLOWER_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 729; continue _fun00003 }
 593:
            golfie = _closure1_slot7;
            golfie = golfie.TIKTOK_FOLLOWING_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 676; continue _fun00003 }
 607:
            golfie = _closure1_slot7;
            golfie = golfie.TIKTOK_LIKES_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 623; continue _fun00003 }
 621:
            return zuuluu;
 623:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.ar0WW1;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 676:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.zRta4e;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 729:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.qIPDR0;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 782:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.uv7et7;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 835:
            golfie = _closure1_slot7;
            golfie = golfie.CREATED_AT;
            if(!(golfie !== option)) { _fun00004_ip = 1128; continue _fun00003 }
 852:
            golfie = _closure1_slot7;
            golfie = golfie.EBAY_TOP_RATED_SELLER;
            if(!(golfie !== option)) { _fun00004_ip = 1075; continue _fun00003 }
 869:
            golfie = _closure1_slot7;
            golfie = golfie.EBAY_POSITIVE_FEEDBACK_PERCENTAGE;
            if(!(golfie !== option)) { _fun00004_ip = 1022; continue _fun00003 }
 886:
            golfie = _closure1_slot7;
            golfie = golfie.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 969; continue _fun00003 }
 900:
            golfie = _closure1_slot7;
            golfie = golfie.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 916; continue _fun00003 }
 914:
            return zuuluu;
 916:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.6ZFYdH;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 969:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.QP5W1d;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1022:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.rl9Vg4;
                entity = {};
                report = _closure2_slot0;
                entity['value'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1075:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.TEEYwc;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1128:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1181:
            golfie = _closure1_slot7;
            golfie = golfie.CREATED_AT;
            if(!(golfie !== option)) { _fun00004_ip = 1264; continue _fun00003 }
 1195:
            golfie = _closure1_slot7;
            golfie = golfie.PAYPAL_VERIFIED;
            if(!(golfie !== option)) { _fun00004_ip = 1211; continue _fun00003 }
 1209:
            return zuuluu;
 1211:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.slSQuL;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1264:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1317:
            golfie = _closure1_slot7;
            golfie = golfie.CREATED_AT;
            if(!(golfie !== option)) { _fun00004_ip = 1540; continue _fun00003 }
 1334:
            golfie = _closure1_slot7;
            golfie = golfie.TWITTER_VERIFIED;
            if(!(golfie !== option)) { _fun00004_ip = 1487; continue _fun00003 }
 1351:
            golfie = _closure1_slot7;
            golfie = golfie.TWITTER_FOLLOWERS_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 1434; continue _fun00003 }
 1365:
            golfie = _closure1_slot7;
            golfie = golfie.TWITTER_STATUSES_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 1381; continue _fun00003 }
 1379:
            return zuuluu;
 1381:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.MI7NKi;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1434:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.bkajam;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1487:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.xRygZG;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1540:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1593:
            golfie = _closure1_slot7;
            golfie = golfie.CREATED_AT;
            if(!(golfie !== option)) { _fun00004_ip = 1816; continue _fun00003 }
 1610:
            golfie = _closure1_slot7;
            golfie = golfie.STEAM_GAME_COUNT;
            if(!(golfie !== option)) { _fun00004_ip = 1763; continue _fun00003 }
 1627:
            golfie = _closure1_slot7;
            golfie = golfie.STEAM_ITEM_COUNT_TF2;
            if(!(golfie !== option)) { _fun00004_ip = 1710; continue _fun00003 }
 1641:
            golfie = _closure1_slot7;
            golfie = golfie.STEAM_ITEM_COUNT_DOTA2;
            if(!(golfie !== option)) { _fun00004_ip = 1657; continue _fun00003 }
 1655:
            return zuuluu;
 1657:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.dMnRam;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1710:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.MceZJy;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1763:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.H9eLoa;
                entity = {};
                report = _closure2_slot0;
                entity['count'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1816:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golfie = 8;
            golfie = offset[golfie];
            golfie = verify.bind(tangon)(golfie);
            offset = golfie.intl;
            verify = offset.format;
            golfie = {};
            yankee = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['platformQuantityHook'] = yankee;
            entity = verify.bind(offset)(report, golfie);
            _fun00004_ip = 2134; continue _fun00003;
 1869:
            golfie = _closure1_slot7;
            golfie = golfie.CREATED_AT;
            if(!(golfie !== option)) { _fun00004_ip = 2086; continue _fun00003 }
 1886:
            golfie = _closure1_slot7;
            golfie = golfie.REDDIT_TOTAL_KARMA;
            if(!(golfie !== option)) { _fun00004_ip = 2036; continue _fun00003 }
 1903:
            golfie = _closure1_slot7;
            golfie = golfie.REDDIT_GOLD;
            if(!(golfie !== option)) { _fun00004_ip = 1986; continue _fun00003 }
 1917:
            golfie = _closure1_slot7;
            golfie = golfie.REDDIT_MOD;
            if(!(golfie !== option)) { _fun00004_ip = 1933; continue _fun00003 }
 1931:
            return zuuluu;
 1933:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            golfie = option.format;
            zuuluu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.9rPbEh;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['platformQuantityHook'] = verify;
            entity = golfie.bind(option)(report, zuuluu);
            _fun00004_ip = 2134; continue _fun00003;
 1986:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            golfie = option.format;
            zuuluu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.intl;
                michal = zuuluu.string;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.t;
                entity = entity.+/5TCw;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu['platformQuantityHook'] = verify;
            entity = golfie.bind(option)(report, zuuluu);
            _fun00004_ip = 2134; continue _fun00003;
 2036:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 8;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            option = zuuluu.intl;
            golfie = option.format;
            zuuluu = {};
            verify = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.P2JAER;
                entity = {};
                report = _closure2_slot0;
                entity['karma'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu['platformQuantityHook'] = verify;
            entity = golfie.bind(option)(report, zuuluu);
            _fun00004_ip = 2134; continue _fun00003;
 2086:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 8;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            tangon = michal.intl;
            zuuluu = tangon.format;
            michal = {};
            oscard = function() { // Original name: platformQuantityHook
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 8;
                zuuluu = oscard[entity];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                tangon = zuuluu.intl;
                zuuluu = tangon.formatToPlainString;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                entity = entity.t;
                michal = entity.TPbtEh;
                entity = {};
                report = _closure2_slot0;
                entity['days'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal['platformQuantityHook'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal);
 2134:
            return entity;
        }
    };
    zuuluu['getConnectionsCheckText'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: isVerifiedRolesChannelVisible
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.values;
        entity = argBar;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.tags;
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00006_ip = 26; continue _fun00005 }
 20:
                entity = zuuluu.guild_connections;
 26:
                entity = michal === entity;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isVerifiedRolesChannelVisible'] = tangon;
    tangon = function(argFoo) { // Original name: getVisibleConnectionsRole
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildMember;
            report = entity.guild;
            tangon = entity.guildRoles;
            var _closure2_slot0 = tangon;
            option = entity.channel;
            oscard = entity.onlyChannelConnectionRoles;
            golfie = undefined;
            if(!(oscard === golfie)) { _fun00008_ip = 45; continue _fun00007 }
 43:
            oscard = false;
 45:
            entity = null;
            if(!(entity != zuuluu)) { _fun00008_ip = 297; continue _fun00007 }
 54:
            verify = entity == report;
            if(!verify) { _fun00008_ip = 65; continue _fun00007 }
 61:
            verify = entity != option;
 65:
            if(!verify) { _fun00008_ip = 95; continue _fun00007 }
 68:
            yankee = _closure1_slot5;
            offset = yankee.getGuild;
            verify = option.getGuildId;
            verify = verify.bind(option)();
            report = offset.bind(yankee)(verify);
 95:
            if(!(entity != report)) { _fun00008_ip = 295; continue _fun00007 }
 102:
            verify = report.id;
            if(!(entity == tangon)) { _fun00008_ip = 133; continue _fun00007 }
 111:
            report = _closure1_slot4;
            tangon = report.getRoles;
            tangon = tangon.bind(report)(verify);
            _closure2_slot0 = tangon;
 133:
            report = zuuluu.roles;
            tangon = report.map;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = michal[entity];
                return entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    michal = null;
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00010_ip = 35; continue _fun00009 }
 14:
                    zuuluu = zuuluu.tags;
                    tangon = michal == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00010_ip = 35; continue _fun00009 }
 29:
                    entity = zuuluu.guild_connections;
 35:
                    entity = michal === entity;
                    return entity;
                }
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.sort;
            michal = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    oscard = undefined;
                    report = tangon.bind(oscard)(zuuluu);
                    zuuluu = null;
                    tangon = zuuluu != entity;
                    if(!tangon) { _fun00012_ip = 44; continue _fun00011 }
 40:
                    tangon = zuuluu != michal;
 44:
                    zuuluu = 'roleA or roleB is null';
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    michal = michal.position;
                    entity = entity.position;
                    entity = michal - entity;
                    return entity;
                }
            };
            report = zuuluu.bind(tangon)(michal);
            verify = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 9;
            michal = offset[michal];
            tangon = verify.bind(golfie)(michal);
            zuuluu = tangon.intersection;
            michal = 10;
            michal = offset[michal];
            michal = verify.bind(golfie)(michal);
            michal = michal.bind(golfie)(option);
            tangon = zuuluu.bind(tangon)(report, michal);
            michal = tangon.length;
            zuuluu = 0;
            if(!(!(michal > zuuluu))) { _fun00008_ip = 274; continue _fun00007 }
 248:
            michal = null;
            if(oscard) { _fun00008_ip = 272; continue _fun00007 }
 253:
            oscard = report[zuuluu];
            golfie = entity != oscard;
            report = null;
            if(!golfie) { _fun00008_ip = 269; continue _fun00007 }
 266:
            report = oscard;
 269:
            michal = report;
 272:
            _fun00008_ip = 293; continue _fun00007;
 274:
            tangon = tangon[zuuluu];
            report = entity != tangon;
            zuuluu = null;
            if(!report) { _fun00008_ip = 290; continue _fun00007 }
 287:
            zuuluu = tangon;
 290:
            michal = zuuluu;
 293:
            return michal;
 295:
            return entity;
 297:
            return entity;
        }
    };
    zuuluu['getVisibleConnectionsRole'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getCreatedAtDate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00014_ip = 118; continue _fun00013 }
 9:
            michal = '';
            if(!(michal !== report)) { _fun00014_ip = 118; continue _fun00013 }
 17:
            zuuluu = global;
            michal = zuuluu.Date;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            verify = tangon;
            option = report;
            michal = new verify[michal](option, golfie);
            oscard = michal instanceof Object ? michal : tangon;
            michal = zuuluu.Date;
            tangon = oscard instanceof michal;
            michal = null;
            if(!tangon) { _fun00014_ip = 116; continue _fun00013 }
 63:
            report = zuuluu.isNaN;
            zuuluu = oscard.getTime;
            tangon = zuuluu.bind(oscard)();
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            michal = null;
            if(zuuluu) { _fun00014_ip = 116; continue _fun00013 }
 91:
            report = oscard.toLocaleDateString;
            tangon = argBar;
            zuuluu = {'month': 'short', 'day': 'numeric', 'year': 'numeric'};
            michal = report.bind(oscard)(tangon, zuuluu);
 116:
            return michal;
 118:
            return entity;
        }
    };
    zuuluu['getCreatedAtDate'] = tangon;
    michal = function(argFoo) { // Original name: useShowLinkedRolesAdminNux
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 11;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot6;
        michal[1] = report;
        entity = function() {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = global;
                tangon = entity.Object;
                zuuluu = tangon.values;
                golfie = _closure1_slot4;
                report = golfie.getRoles;
                oscard = _closure2_slot0;
                entity = oscard.id;
                entity = report.bind(golfie)(entity);
                tangon = zuuluu.bind(tangon)(entity);
                zuuluu = tangon.some;
                entity = function(argFoo) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.tags;
                        michal = null;
                        tangon = michal == zuuluu;
                        entity = undefined;
                        if(tangon) { _fun00018_ip = 26; continue _fun00017 }
 20:
                        entity = zuuluu.guild_connections;
 26:
                        entity = michal === entity;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity);
                option = _closure1_slot0;
                verify = _closure1_slot2;
                zuuluu = 12;
                zuuluu = verify[zuuluu];
                golfie = undefined;
                report = option.bind(golfie)(zuuluu);
                tangon = report.UNSAFE_isDismissibleContentDismissed;
                zuuluu = 13;
                zuuluu = verify[zuuluu];
                zuuluu = option.bind(golfie)(zuuluu);
                zuuluu = zuuluu.DismissibleContent;
                zuuluu = zuuluu.CONNECTIONS_NUX;
                zuuluu = tangon.bind(report)(zuuluu);
                report = _closure1_slot6;
                tangon = report.can;
                michal = _closure1_slot9;
                michal = michal.MANAGE_ROLES;
                michal = tangon.bind(report)(michal, oscard);
                entity = !entity;
                if(!entity) { _fun00016_ip = 158; continue _fun00015 }
 155:
                entity = zuuluu;
 158:
                if(!entity) { _fun00016_ip = 164; continue _fun00015 }
 161:
                entity = michal;
 164:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useShowLinkedRolesAdminNux'] = michal;
    return entity;
})();