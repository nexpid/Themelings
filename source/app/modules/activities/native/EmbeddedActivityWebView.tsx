// app/modules/activities/native/EmbeddedActivityWebView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
 342:
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
    entity = function(argFoo, argBar) { // Original name: getSafeArea
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            verify = argBar;
            oscard = null;
            entity = verify;
            if(!(oscard != tangon)) { _fun00008_ip = 113; continue _fun00007 }
 15:
            zuuluu = tangon.disable;
            golfie = 0;
            michal = 0;
            if(zuuluu) { _fun00008_ip = 110; continue _fun00007 }
 28:
            zuuluu = tangon.override;
            if(!(oscard == zuuluu)) { _fun00008_ip = 82; continue _fun00007 }
 38:
            report = tangon.offset;
            zuuluu = verify;
            if(!(oscard != report)) { _fun00008_ip = 80; continue _fun00007 }
 51:
            report = global;
            option = report.Math;
            oscard = option.max;
            report = tangon.offset;
            report = verify + report;
            zuuluu = oscard.bind(option)(golfie, report);
 80:
            _fun00008_ip = 107; continue _fun00007;
 82:
            report = global;
            oscard = report.Math;
            report = oscard.max;
            tangon = tangon.override;
            zuuluu = report.bind(oscard)(golfie, tangon);
 107:
            michal = zuuluu;
 110:
            entity = michal;
 113:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Linking;
    var _closure1_slot7 = option;
    tangon = tangon.NativeModules;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityPlatform;
    var _closure1_slot10 = option;
    tangon = tangon.DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ComponentActions;
    var _closure1_slot12 = option;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot13 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot14 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 'transparent';
    offset['backgroundColor'] = yankee;
    tangon['webView'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    backup = 'EmbeddedActivityWebView';
    kiloes = golfie;
    tangon = new kiloes[option](backup, foxtra);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot16 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    golfie = report.bind(entity)(tangon);
    tangon = golfie.isIOS;
    tangon = tangon.bind(golfie)();
    var _closure1_slot17 = tangon;
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/native/EmbeddedActivityWebView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: EmbeddedActivityWebView
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            whisks = entity.activityUrl;
            romeon = entity.applicationId;
            var _closure2_slot0 = romeon;
            config = entity.channelId;
            var _closure2_slot1 = config;
            status = entity.guildId;
            var _closure2_slot2 = status;
            result = entity.activitySessionId;
            var _closure2_slot3 = result;
            cntext = entity.queryParams;
            tangon = entity.onActivityCrash;
            var _closure2_slot4 = tangon;
            echoed = entity.onLoadError;
            var _closure2_slot5 = echoed;
            update = entity.allowPopups;
            golfie = entity.referrerPolicy;
            var _closure2_slot6 = golfie;
            equals = entity.isPipOrGridMode;
            var _closure2_slot7 = equals;
            kiloes = entity.webViewKey;
            var _closure2_slot8 = kiloes;
            offset = entity.ignoreSilentHardwareSwitch;
            oscard = undefined;
            if(!(offset === oscard)) { _fun00010_ip = 124; continue _fun00009 }
 122:
            offset = true;
 124:
            yankee = entity.safeAreasConfig;
            var _closure2_slot9 = yankee;
            zuuluu = entity.currentEmbeddedActivity;
            var _closure2_slot10 = zuuluu;
            var _closure2_slot11 = oscard;
            var _closure2_slot12 = oscard;
            var _closure2_slot13 = oscard;
            var _closure2_slot14 = oscard;
            var _closure2_slot15 = oscard;
            var _closure2_slot16 = oscard;
            var _closure2_slot17 = oscard;
            var _closure2_slot18 = oscard;
            var _closure2_slot19 = oscard;
            var _closure2_slot20 = oscard;
            var _closure2_slot21 = oscard;
            var _closure2_slot22 = oscard;
            var _closure2_slot23 = oscard;
            var _closure2_slot24 = oscard;
            var _closure2_slot25 = oscard;
            var _closure2_slot26 = oscard;
            var _closure2_slot27 = oscard;
            var _closure2_slot28 = oscard;
            var _closure2_slot29 = oscard;
            var _closure2_slot30 = oscard;
            var _closure2_slot31 = oscard;
            entity = _closure1_slot15;
            record = entity.bind(oscard)();
            target = _closure1_slot6;
            michal = target.useContext;
            option = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 11;
            entity = backup[entity];
            entity = option.bind(oscard)(entity);
            entity = entity.WebViewContext;
            sizing = michal.bind(target)(entity);
            michal = target.useState;
            entity = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.hasFrameId;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = michal.bind(target)(entity);
            output = _closure1_slot5;
            verify = 1;
            entity = output.bind(oscard)(entity, verify);
            sequen = 0;
            michal = entity[sequen];
            _closure2_slot11 = michal;
            option = target.useState;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot8;
                    entity = null;
                    if(!(entity == michal)) { _fun00012_ip = 50; continue _fun00011 }
 13:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 13;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.v4;
                    entity = entity.bind(michal)();
                    _fun00012_ip = 87; continue _fun00011;
 50:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 12;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.getOrCreateFrameId;
                    entity = michal.bind(zuuluu)();
 87:
                    return entity;
                }
            };
            entity = option.bind(target)(entity);
            entity = output.bind(oscard)(entity, verify);
            ctrled = entity[sequen];
            _closure2_slot12 = ctrled;
            option = target.useState;
            entity = null;
            option = option.bind(target)(entity);
            papara = 2;
            option = output.bind(oscard)(option, papara);
            source = option[sequen];
            _closure2_slot13 = source;
            option = option[verify];
            _closure2_slot14 = option;
            sierra = target.useMemo;
            vacuum = new Array(1);
            vacuum[0] = kiloes;
            option = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot8;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    report = undefined;
                    entity = undefined;
                    if(!zuuluu) { _fun00014_ip = 58; continue _fun00013 }
 20:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot3;
                    zuuluu = 14;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.getWebViewProxy;
                    michal = _closure2_slot8;
                    entity = zuuluu.bind(tangon)(michal);
 58:
                    return entity;
                }
            };
            limora = sierra.bind(target)(option, vacuum);
            _closure2_slot15 = limora;
            option = target.useState;
            option = option.bind(target)(entity);
            option = output.bind(oscard)(option, papara);
            vacuum = option[sequen];
            option = option[verify];
            _closure2_slot16 = option;
            output = target.useEffect;
            option = new Array(3);
            option[0] = michal;
            option[1] = ctrled;
            option[2] = kiloes;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot11;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot8;
                    michal = null;
                    entity = michal != zuuluu;
 20:
                    if(entity) { _fun00016_ip = 85; continue _fun00015 }
 23:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot3;
                    michal = 15;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.ComponentDispatch;
                    zuuluu = tangon.dispatch;
                    entity = _closure1_slot12;
                    michal = entity.IFRAME_MOUNT;
                    entity = {};
                    report = _closure2_slot12;
                    entity['id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 85:
                    entity = undefined;
                    return entity;
                }
            };
            michal = output.bind(target)(michal, option);
            output = target.useEffect;
            option = new Array(2);
            option[0] = kiloes;
            option[1] = ctrled;
            michal = function() {
                entity = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = _closure2_slot8;
                        entity = null;
                        if(!(entity == michal)) { _fun00018_ip = 75; continue _fun00017 }
 13:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        michal = 15;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        tangon = michal.ComponentDispatch;
                        zuuluu = tangon.dispatch;
                        entity = _closure1_slot12;
                        michal = entity.IFRAME_UNMOUNT;
                        entity = {};
                        report = _closure2_slot12;
                        entity['id'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
 75:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            michal = output.bind(target)(michal, option);
            option = _closure1_slot1;
            michal = 16;
            michal = backup[michal];
            michal = option.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            backup = {};
            if(!(entity != zuuluu)) { _fun00010_ip = 570; continue _fun00009 }
 526:
            option = zuuluu.customId;
            if(!(entity != option)) { _fun00010_ip = 548; continue _fun00009 }
 536:
            option = zuuluu.customId;
            backup['custom_id'] = option;
 548:
            option = zuuluu.referrerId;
            if(!(entity != option)) { _fun00010_ip = 570; continue _fun00009 }
 558:
            option = zuuluu.referrerId;
            backup['referrer_id'] = option;
 570:
            output = _closure1_slot2;
            sierra = _closure1_slot3;
            option = 17;
            option = sierra[option];
            output = output.bind(oscard)(option);
            option = output.getConstants;
            option = option.bind(output)();
            output = {};
            variable40 = output;
            variable39 = cntext;
            cntext = copyDataProperties(variable40, variable39);
            variable40 = output;
            variable39 = backup;
            backup = copyDataProperties(variable40, variable39);
            backup = 'frame_id';
            output[backup] = ctrled;
            backup = _closure1_slot10;
            cntext = backup.MOBILE;
            backup = 'platform';
            output[backup] = cntext;
            backup = option.Version;
            option = 'mobile_app_version';
            output[option] = backup;
            cntext = _closure1_slot1;
            option = 18;
            option = sierra[option];
            backup = cntext.bind(oscard)(option);
            option = {};
            option['allowPopups'] = update;
            quebec = backup.bind(oscard)(option);
            _closure2_slot17 = quebec;
            update = global;
            option = update.URLSearchParams;
            backup = option.prototype;
            backup = Object.create(backup, {constructor: {value: option}});
            variable41 = backup;
            variable40 = output;
            option = new variable41[option](variable40, variable39);
            output = option instanceof Object ? option : backup;
            option = update.HermesInternal;
            backup = option.concat;
            target = '';
            option = '?';
            whisks = backup.bind(target)(whisks, option, output);
            _closure2_slot18 = whisks;
            backup = _closure1_slot6;
            option = backup.useRef;
            option = option.bind(backup)(yankee);
            _closure2_slot19 = option;
            output = backup.useEffect;
            option = new Array(4);
            option[0] = whisks;
            option[1] = quebec;
            option[2] = echoed;
            option[3] = golfie;
            golfie = function() {
                michal = function() {
                    tangon = _closure1_slot4;
                    zuuluu = undefined;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00020_ip = 380; continue _fun00019 }
 10:
                                zuuluu = undefined;
                                golfie = undefined;
                                tangon = undefined;
                                oscard = null;
                                option = null;
 20: // try_start_0
                                michal = _closure1_slot8;
                                report = michal.DCDSafeAreaManager;
                                michal = report.getStableSafeAreaInsets;
                                michal = michal.bind(report)();
                                SaveGenerator(address=47);
 45:
                                return michal;
 47:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00020_ip = 250; continue _fun00019 }
 56:
                                option = michal;
                                report = _closure2_slot19;
                                offset = report.current;
                                golfie = offset;
                                report = {};
                                romeon = _closure1_slot20;
                                offset = oscard == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 97; continue _fun00019 }
 89:
                                offset = golfie;
                                yankee = offset.left;
 97:
                                offset = option;
                                offset = offset.left;
                                offset = romeon.bind(zuuluu)(yankee, offset);
                                report['left'] = offset;
                                romeon = _closure1_slot20;
                                offset = golfie;
                                offset = oscard == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 139; continue _fun00019 }
 131:
                                offset = golfie;
                                yankee = offset.right;
 139:
                                offset = option;
                                offset = offset.right;
                                offset = romeon.bind(zuuluu)(yankee, offset);
                                report['right'] = offset;
                                romeon = _closure1_slot20;
                                offset = golfie;
                                offset = oscard == offset;
                                yankee = undefined;
                                if(offset) { _fun00020_ip = 181; continue _fun00019 }
 173:
                                offset = golfie;
                                yankee = offset.top;
 181:
                                offset = option;
                                offset = offset.top;
                                offset = romeon.bind(zuuluu)(yankee, offset);
                                report['top'] = offset;
                                offset = _closure1_slot20;
                                verify = golfie;
                                yankee = oscard == verify;
                                verify = undefined;
                                if(yankee) { _fun00020_ip = 220; continue _fun00019 }
 215:
                                verify = golfie.bottom;
 220:
                                golfie = option;
                                golfie = golfie.bottom;
                                golfie = offset.bind(zuuluu)(verify, golfie);
                                report['bottom'] = golfie;
                                golfie = 0;
                                report['imeInsetsBottom'] = golfie;
                                option = report;
 248: // try_end0
                                _fun00020_ip = 255; continue _fun00019;
 250:
                                return michal;
 253: // catch_target0
                                CatchBlockStart(arg_register=1);
 255:
                                report = _closure1_slot1;
                                golfie = _closure1_slot3;
                                michal = 19;
                                michal = golfie[michal];
                                golfie = report.bind(zuuluu)(michal);
                                michal = {};
                                offset = _closure2_slot18;
                                michal['iFrameUri'] = offset;
                                offset = _closure2_slot17;
                                michal['iFrameSandboxAttributes'] = offset;
                                offset = _closure2_slot6;
                                michal['referrerPolicy'] = offset;
                                michal['insets'] = option;
                                offset = _closure1_slot17;
                                option = undefined;
                                if(offset) { _fun00020_ip = 328; continue _fun00019 }
 324:
                                option = _closure1_slot11;
 328:
                                michal['messageForDisallowedNavigationError'] = option;
                                michal = golfie.bind(zuuluu)(michal);
                                SaveGenerator(address=342);
 340:
                                return michal;
 342:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                                if(golfie) { _fun00020_ip = 377; continue _fun00019 }
 348:
                                tangon = michal;
                                if(!(oscard == michal)) { _fun00020_ip = 365; continue _fun00019 }
 355:
                                oscard = _closure2_slot5;
                                oscard = oscard.bind(zuuluu)();
                                _fun00020_ip = 374; continue _fun00019;
 365:
                                report = _closure2_slot16;
                                tangon = report.bind(zuuluu)(tangon);
 374:
                                return zuuluu;
 377:
                                return michal;
 380:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                entity = undefined;
                michal = michal.bind(entity)();
                michal = michal.bind(entity)();
                return entity;
            };
            golfie = output.bind(backup)(golfie, option);
            output = backup.useCallback;
            option = new Array(1);
            option[0] = romeon;
            golfie = function(argFoo) {
                entity = argFoo;
                oscard = entity.nativeEvent;
                zuuluu = _closure1_slot16;
                michal = zuuluu.warn;
                golfie = _closure2_slot0;
                entity = global;
                report = entity.JSON;
                tangon = report.stringify;
                oscard = tangon.bind(report)(oscard);
                entity = entity.HermesInternal;
                report = entity.concat;
                tangon = 'activity WebView error for appId ';
                entity = '. ';
                entity = report.bind(tangon)(golfie, entity, oscard);
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            echoed = output.bind(backup)(golfie, option);
            output = backup.useCallback;
            option = new Array(1);
            option[0] = romeon;
            golfie = function(argFoo) {
                entity = argFoo;
                oscard = entity.nativeEvent;
                zuuluu = _closure1_slot16;
                michal = zuuluu.warn;
                golfie = _closure2_slot0;
                entity = global;
                report = entity.JSON;
                tangon = report.stringify;
                oscard = tangon.bind(report)(oscard);
                entity = entity.HermesInternal;
                report = entity.concat;
                tangon = 'activity WebView render process gone for appId ';
                entity = '. ';
                entity = report.bind(tangon)(golfie, entity, oscard);
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            output = output.bind(backup)(golfie, option);
            option = backup.useCallback;
            golfie = new Array(7);
            golfie[0] = romeon;
            golfie[1] = config;
            golfie[2] = status;
            golfie[3] = result;
            golfie[4] = ctrled;
            golfie[5] = tangon;
            golfie[6] = limora;
            tangon = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    report = _closure1_slot16;
                    tangon = report.warn;
                    offset = _closure2_slot0;
                    entity = global;
                    entity = entity.HermesInternal;
                    oscard = entity.concat;
                    entity = 'activity WebView content process terminated for appId ';
                    entity = oscard.bind(entity)(offset);
                    entity = tangon.bind(report)(entity);
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 20;
                    oscard = report[entity];
                    entity = undefined;
                    verify = tangon.bind(entity)(oscard);
                    option = verify.track;
                    oscard = _closure1_slot13;
                    golfie = oscard.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED;
                    oscard = {};
                    oscard['application_id'] = offset;
                    offset = _closure2_slot1;
                    oscard['channel_id'] = offset;
                    offset = _closure2_slot2;
                    oscard['guild_id'] = offset;
                    offset = _closure2_slot3;
                    oscard['activity_session_id'] = offset;
                    oscard = option.bind(verify)(golfie, oscard);
                    golfie = _closure1_slot0;
                    oscard = 15;
                    oscard = report[oscard];
                    oscard = golfie.bind(entity)(oscard);
                    option = oscard.ComponentDispatch;
                    golfie = option.dispatch;
                    zuuluu = _closure1_slot12;
                    oscard = zuuluu.IFRAME_UNMOUNT;
                    zuuluu = {};
                    verify = _closure2_slot12;
                    zuuluu['id'] = verify;
                    zuuluu = golfie.bind(option)(oscard, zuuluu);
                    zuuluu = 12;
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.releaseFrameId;
                    zuuluu = zuuluu.bind(tangon)();
                    tangon = _closure2_slot15;
                    zuuluu = null;
                    if(!(zuuluu != tangon)) { _fun00022_ip = 222; continue _fun00021 }
 208:
                    tangon = _closure2_slot15;
                    zuuluu = tangon.releaseWebView;
                    zuuluu = zuuluu.bind(tangon)();
 222:
                    michal = _closure2_slot4;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            result = option.bind(backup)(tangon, golfie);
            golfie = _closure1_slot0;
            tangon = 21;
            tangon = sierra[tangon];
            status = golfie.bind(oscard)(tangon);
            option = status.useStateFromStores;
            tangon = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                michal = _closure1_slot9;
                entity = michal.getUseActivityUrlOverride;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = option.bind(status)(golfie, tangon);
            _closure2_slot20 = tangon;
            golfie = backup.useState;
            option = false;
            status = golfie.bind(backup)(option);
            golfie = _closure1_slot5;
            golfie = golfie.bind(oscard)(status, papara);
            status = golfie[sequen];
            _closure2_slot21 = status;
            golfie = golfie[verify];
            _closure2_slot22 = golfie;
            golfie = 22;
            golfie = sierra[golfie];
            golfie = cntext.bind(oscard)(golfie);
            cntext = golfie.bind(oscard)(status);
            _closure2_slot23 = cntext;
            sierra = backup.useEffect;
            golfie = new Array(2);
            golfie[0] = whisks;
            golfie[1] = tangon;
            tangon = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0: // try_start_0
                    entity = global;
                    report = entity.URL;
                    oscard = _closure2_slot18;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    golfie = tangon;
                    zuuluu = new golfie[report](oscard, report);
                    tangon = zuuluu instanceof Object ? zuuluu : tangon;
                    zuuluu = _closure2_slot14;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon);
 46: // try_end0
                    _fun00024_ip = 75; continue _fun00023;
 48: // catch_target0
                    CatchBlockStart(arg_register=1);
                    zuuluu = _closure2_slot20;
                    if(zuuluu) { _fun00024_ip = 62; continue _fun00023 }
 60:
                    throw michal;
 62:
                    zuuluu = _closure2_slot22;
                    michal = undefined;
                    entity = true;
                    entity = zuuluu.bind(michal)(entity);
 75:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = sierra.bind(backup)(tangon, golfie);
            golfie = backup.useEffect;
            tangon = new Array(5);
            tangon[0] = status;
            tangon[1] = cntext;
            tangon[2] = config;
            tangon[3] = romeon;
            tangon[4] = zuuluu;
            zuuluu = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot23;
                    entity = !entity;
                    if(!entity) { _fun00026_ip = 17; continue _fun00025 }
 13:
                    entity = _closure2_slot21;
 17:
                    if(!entity) { _fun00026_ip = 309; continue _fun00025 }
 23:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    entity = 23;
                    entity = zuuluu[entity];
                    report = undefined;
                    golfie = michal.bind(report)(entity);
                    oscard = golfie.show;
                    entity = {};
                    yankee = _closure1_slot0;
                    option = 24;
                    verify = zuuluu[option];
                    verify = yankee.bind(report)(verify);
                    romeon = verify.intl;
                    offset = romeon.string;
                    verify = zuuluu[option];
                    verify = yankee.bind(report)(verify);
                    verify = verify.t;
                    verify = verify.PtobXV;
                    verify = offset.bind(romeon)(verify);
                    entity['title'] = verify;
                    verify = zuuluu[option];
                    verify = yankee.bind(report)(verify);
                    romeon = verify.intl;
                    offset = romeon.string;
                    verify = zuuluu[option];
                    verify = yankee.bind(report)(verify);
                    verify = verify.t;
                    verify = verify.55iAUV;
                    verify = offset.bind(romeon)(verify);
                    entity['body'] = verify;
                    verify = zuuluu[option];
                    verify = yankee.bind(report)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    option = zuuluu[option];
                    option = yankee.bind(report)(option);
                    option = option.t;
                    option = option.BddRzc;
                    option = verify.bind(offset)(option);
                    entity['confirmText'] = option;
                    entity = oscard.bind(golfie)(entity);
                    entity = 25;
                    entity = zuuluu[entity];
                    option = michal.bind(report)(entity);
                    oscard = option.selectParticipant;
                    entity = _closure2_slot1;
                    golfie = null;
                    entity = oscard.bind(option)(entity, golfie);
                    entity = 12;
                    entity = zuuluu[entity];
                    zuuluu = michal.bind(report)(entity);
                    michal = zuuluu.leaveActivity;
                    entity = {};
                    oscard = _closure2_slot10;
                    oscard = golfie == oscard;
                    if(oscard) { _fun00026_ip = 285; continue _fun00025 }
 276:
                    oscard = _closure2_slot10;
                    report = oscard.location;
 285:
                    entity['location'] = report;
                    tangon = _closure2_slot0;
                    entity['applicationId'] = tangon;
                    tangon = false;
                    entity['showFeedback'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 309:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(backup)(zuuluu, tangon);
            _closure2_slot24 = entity;
            zuuluu = entity != source;
            config = null;
            if(!zuuluu) { _fun00010_ip = 1173; continue _fun00009 }
 1098:
            zuuluu = _closure1_slot17;
            if(zuuluu) { _fun00010_ip = 1144; continue _fun00009 }
 1105:
            variable40 = source.origin;
            zuuluu = update.HermesInternal;
            golfie = zuuluu.concat;
            variable39 = '/';
            variable37 = '/activity.html';
            variable41 = target;
            variable38 = ctrled;
            zuuluu = variable41[golfie](variable40, variable39, variable38, variable37, variable36);
            _fun00010_ip = 1166; continue _fun00009;
 1144:
            tangon = update.HermesInternal;
            golfie = tangon.concat;
            tangon = 'file://';
            zuuluu = golfie.bind(tangon)(vacuum);
 1166:
            _closure2_slot24 = zuuluu;
            config = zuuluu;
 1173:
            tangon = _closure1_slot17;
            _closure2_slot25 = tangon;
            cntext = _closure1_slot6;
            zuuluu = cntext.useState;
            zuuluu = zuuluu.bind(cntext)(option);
            backup = _closure1_slot5;
            golfie = backup.bind(oscard)(zuuluu, papara);
            zuuluu = golfie[sequen];
            golfie = golfie[verify];
            _closure2_slot26 = golfie;
            status = cntext.useState;
            golfie = new Array(0);
            golfie = status.bind(cntext)(golfie);
            backup = backup.bind(oscard)(golfie, papara);
            golfie = backup[sequen];
            _closure2_slot27 = golfie;
            backup = backup[verify];
            _closure2_slot28 = backup;
            papara = cntext.useEffect;
            backup = new Array(2);
            backup[0] = romeon;
            backup[1] = tangon;
            romeon = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = _closure2_slot25;
                    if(!michal) { _fun00028_ip = 50; continue _fun00027 }
 12:
                    michal = ["'self'"];
                    var _closure3_slot0 = michal;
                    michal = function(argFoo, argBar) { // Original name: parseCsp
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            zuuluu = argBar;
                            michal = zuuluu.match;
                            entity = argFoo;
                            zuuluu = michal.bind(zuuluu)(entity);
                            entity = null;
                            if(!(entity !== zuuluu)) { _fun00030_ip = 35; continue _fun00029 }
 23:
                            michal = zuuluu.length;
                            entity = 2;
                            if(!(!(michal >= entity))) { _fun00030_ip = 41; continue _fun00029 }
 35:
                            entity = new Array(0);
                            _fun00030_ip = 79; continue _fun00029;
 41:
                            michal = 1;
                            tangon = zuuluu[michal];
                            zuuluu = tangon.split;
                            michal = ' ';
                            tangon = zuuluu.bind(tangon)(michal);
                            zuuluu = tangon.filter;
                            michal = function(argFoo) {
                                zuuluu = _closure3_slot0;
                                michal = zuuluu.includes;
                                entity = argFoo;
                                entity = michal.bind(zuuluu)(entity);
                                entity = !entity;
                                return entity;
                            };
                            entity = zuuluu.bind(tangon)(michal);
 79:
                            return entity;
                        }
                    };
                    var _closure3_slot1 = michal;
                    entity = function() {
                        tangon = _closure1_slot4;
                        zuuluu = undefined;
                        michal = function* () {
                            entity = function* () { // Original name: ?anon_0_
                                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00032_ip = 284; continue _fun00031 }
 10:
                                    golfie = _closure2_slot0;
                                    option = global;
                                    michal = option.HermesInternal;
                                    oscard = michal.concat;
                                    report = 'https://';
                                    zuuluu = '.';
                                    michal = 'discordsays.com';
                                    report = oscard.bind(report)(golfie, zuuluu, michal);
                                    oscard = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    michal = 26;
                                    michal = zuuluu[michal];
                                    zuuluu = undefined;
                                    michal = oscard.bind(zuuluu)(michal);
                                    golfie = michal.HTTP;
                                    oscard = golfie.get;
                                    michal = {};
                                    option = option.HermesInternal;
                                    offset = option.concat;
                                    verify = '';
                                    option = '/.discord/csp';
                                    option = offset.bind(verify)(report, option);
                                    michal['url'] = option;
                                    option = false;
                                    michal['rejectWithError'] = option;
                                    michal = oscard.bind(golfie)(michal);
                                    SaveGenerator(address=136);
 134:
                                    return michal;
 136:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                    if(oscard) { _fun00032_ip = 281; continue _fun00031 }
 145:
                                    oscard = michal.headers;
                                    verify = oscard.content-security-policy;
                                    option = ['about:blank', 'file://*'];
                                    option[2] = report;
                                    golfie = _closure3_slot1;
                                    oscard = /frame-src (.*?);/;
                                    romeon = golfie.bind(zuuluu)(oscard, verify);
                                    yankee = 3;
                                    foxtra = option;
                                    yankee = arraySpread(foxtra, romeon, yankee);
                                    golfie = _closure3_slot1;
                                    report = /child-src (.*?);/;
                                    romeon = golfie.bind(zuuluu)(report, verify);
                                    foxtra = option;
                                    report = arraySpread(foxtra, romeon, yankee);
                                    oscard = _closure2_slot28;
                                    golfie = option.map;
                                    report = function(argFoo) {
                                        michal = _closure1_slot1;
                                        zuuluu = _closure1_slot3;
                                        entity = 27;
                                        entity = zuuluu[entity];
                                        zuuluu = undefined;
                                        michal = michal.bind(zuuluu)(entity);
                                        entity = argFoo;
                                        tangon = michal.bind(zuuluu)(entity);
                                        zuuluu = tangon.replace;
                                        michal = /\\\*/g;
                                        entity = '.*';
                                        zuuluu = zuuluu.bind(tangon)(michal, entity);
                                        entity = global;
                                        entity = entity.HermesInternal;
                                        michal = entity.concat;
                                        entity = '^';
                                        entity = michal.bind(entity)(zuuluu);
                                        return entity;
                                    };
                                    report = golfie.bind(option)(report);
                                    report = oscard.bind(zuuluu)(report);
                                    report = _closure2_slot26;
                                    tangon = true;
                                    tangon = report.bind(zuuluu)(tangon);
                                    return zuuluu;
 281:
                                    return michal;
 284:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure4_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    michal = undefined;
                    entity = entity.bind(michal)();
                    entity = entity.bind(michal)();
 50:
                    entity = undefined;
                    return entity;
                }
            };
            romeon = papara.bind(cntext)(romeon, backup);
            backup = cntext.useCallback;
            romeon = new Array(2);
            romeon[0] = config;
            romeon[1] = golfie;
            golfie = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.mainDocumentURL;
                    michal = _closure2_slot24;
                    report = null;
                    if(!(report != michal)) { _fun00034_ip = 37; continue _fun00033 }
 22:
                    if(!(report != tangon)) { _fun00034_ip = 37; continue _fun00033 }
 26:
                    michal = _closure2_slot24;
                    if(!(tangon === michal)) { _fun00034_ip = 283; continue _fun00033 }
 37:
                    tangon = _closure1_slot18;
                    zuuluu = _closure2_slot27;
                    oscard = undefined;
                    option = tangon.bind(oscard)(zuuluu);
                    tangon = option.bind(oscard)();
                    zuuluu = tangon.done;
                    golfie = global;
                    if(zuuluu) { _fun00034_ip = 139; continue _fun00033 }
 69:
                    yankee = tangon.value;
                    zuuluu = golfie.RegExp;
                    verify = zuuluu.prototype;
                    verify = Object.create(verify, {constructor: {value: zuuluu}});
                    romeon = verify;
                    zuuluu = new romeon[zuuluu](yankee, offset);
                    offset = zuuluu instanceof Object ? zuuluu : verify;
                    verify = offset.test;
                    zuuluu = entity.url;
                    zuuluu = verify.bind(offset)(zuuluu);
                    if(zuuluu) { _fun00034_ip = 135; continue _fun00033 }
 118:
                    verify = option.bind(oscard)();
                    zuuluu = verify.done;
                    tangon = verify;
                    if(zuuluu) { _fun00034_ip = 139; continue _fun00033 }
 133:
                    _fun00034_ip = 69; continue _fun00033;
 135:
                    zuuluu = true;
                    return zuuluu;
 139:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    golfie = 28;
                    zuuluu = zuuluu[golfie];
                    option = tangon.bind(oscard)(zuuluu);
                    tangon = option.toURLSafe;
                    verify = _closure1_slot9;
                    zuuluu = verify.getActivityUrlOverride;
                    verify = zuuluu.bind(verify)();
                    offset = report != verify;
                    zuuluu = '';
                    if(!offset) { _fun00034_ip = 193; continue _fun00033 }
 190:
                    zuuluu = verify;
 193:
                    tangon = tangon.bind(option)(zuuluu);
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[golfie];
                    oscard = zuuluu.bind(oscard)(michal);
                    zuuluu = oscard.toURLSafe;
                    michal = entity.url;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    michal = report != tangon;
                    if(!michal) { _fun00034_ip = 242; continue _fun00033 }
 238:
                    michal = report != zuuluu;
 242:
                    if(!michal) { _fun00034_ip = 281; continue _fun00033 }
 245:
                    report = tangon.origin;
                    tangon = tangon.pathname;
                    tangon = report + tangon;
                    report = zuuluu.origin;
                    zuuluu = zuuluu.pathname;
                    zuuluu = report + zuuluu;
                    michal = tangon === zuuluu;
 281:
                    return michal;
 283:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.openURL;
                    entity = entity.url;
                    entity = michal.bind(zuuluu)(entity);
                    entity = false;
                    return entity;
                }
            };
            romeon = backup.bind(cntext)(golfie, romeon);
            whisks = entity != config;
            if(!whisks) { _fun00010_ip = 1320; continue _fun00009 }
 1316:
            whisks = entity != source;
 1320:
            if(!whisks) { _fun00010_ip = 1327; continue _fun00009 }
 1323:
            whisks = entity != vacuum;
 1327:
            _closure2_slot29 = whisks;
            status = _closure1_slot6;
            golfie = status.useRef;
            golfie = golfie.bind(status)(entity);
            _closure2_slot30 = golfie;
            papara = status.useCallback;
            cntext = function(argFoo) {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = _closure2_slot30;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00036_ip = 62; continue _fun00035 }
 18:
                    michal = zuuluu.injectJavaScript;
                    tangon = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 29;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = argFoo;
                    entity = tangon.bind(report)(entity);
                    entity = michal.bind(zuuluu)(entity);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            backup = new Array(0);
            sierra = papara.bind(status)(cntext, backup);
            _closure2_slot31 = sierra;
            papara = status.useCallback;
            cntext = new Array(3);
            cntext[0] = kiloes;
            quebec = entity == source;
            backup = undefined;
            if(quebec) { _fun00010_ip = 1401; continue _fun00009 }
 1395:
            backup = source.origin;
 1401:
            cntext[1] = backup;
            cntext[2] = sierra;
            backup = function(argFoo) {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    michal = _closure2_slot8;
                    golfie = null;
                    if(!(golfie == michal)) { _fun00038_ip = 155; continue _fun00037 }
 16:
                    michal = global;
                    tangon = michal.JSON;
                    zuuluu = tangon.parse;
                    michal = argFoo;
                    michal = michal.nativeEvent;
                    michal = michal.data;
                    report = zuuluu.bind(tangon)(michal);
                    zuuluu = 'object';
                    michal = typeof report;
                    michal = zuuluu === michal;
                    if(!michal) { _fun00038_ip = 89; continue _fun00037 }
 62:
                    zuuluu = _closure2_slot13;
                    tangon = golfie == zuuluu;
                    zuuluu = undefined;
                    if(tangon) { _fun00038_ip = 85; continue _fun00037 }
 75:
                    tangon = _closure2_slot13;
                    zuuluu = tangon.origin;
 85:
                    michal = golfie != zuuluu;
 89:
                    if(!michal) { _fun00038_ip = 155; continue _fun00037 }
 92:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 30;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.handleMessage;
                    oscard = _closure2_slot13;
                    oscard = golfie == oscard;
                    if(oscard) { _fun00038_ip = 144; continue _fun00037 }
 134:
                    oscard = _closure2_slot13;
                    michal = oscard.origin;
 144:
                    entity = _closure2_slot31;
                    entity = zuuluu.bind(tangon)(report, michal, entity);
 155:
                    entity = undefined;
                    return entity;
                }
            };
            backup = papara.bind(status)(backup, cntext);
            status = _closure1_slot6;
            papara = status.useEffect;
            cntext = new Array(6);
            cntext[0] = michal;
            cntext[1] = equals;
            cntext[2] = whisks;
            cntext[3] = limora;
            cntext[4] = sierra;
            cntext[5] = yankee;
            report = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    entity = _closure2_slot29;
                    if(!entity) { _fun00040_ip = 20; continue _fun00039 }
 10:
                    zuuluu = _closure2_slot15;
                    michal = null;
                    entity = michal != zuuluu;
 20:
                    if(!entity) { _fun00040_ip = 69; continue _fun00039 }
 23:
                    entity = _closure1_slot8;
                    michal = entity.DCDSafeAreaManager;
                    entity = michal.getStableSafeAreaInsets;
                    zuuluu = entity.bind(michal)();
                    michal = zuuluu.then;
                    tangon = function() {
                        tangon = _closure1_slot4;
                        zuuluu = undefined;
                        michal = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                                    StartGenerator();
                                    report = argFoo;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00042_ip = 362; continue _fun00041 }
 13:
                                    michal = undefined;
                                    offset = undefined;
                                    zuuluu = undefined;
                                    oscard = _closure2_slot7;
                                    if(!oscard) { _fun00042_ip = 43; continue _fun00041 }
 29:
                                    report = {'top': 0, 'bottom': 0, 'left': 0, 'right': 0};
 43:
                                    offset = report;
                                    oscard = {};
                                    report = 'safeAreaUpdateEvent';
                                    oscard['type'] = report;
                                    option = {};
                                    verify = {};
                                    foxtra = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    golfie = null;
                                    yankee = golfie == yankee;
                                    romeon = undefined;
                                    if(yankee) { _fun00042_ip = 93; continue _fun00041 }
 84:
                                    yankee = _closure2_slot9;
                                    romeon = yankee.left;
 93:
                                    yankee = offset;
                                    yankee = yankee.left;
                                    yankee = foxtra.bind(michal)(romeon, yankee);
                                    verify['left'] = yankee;
                                    foxtra = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    yankee = golfie == yankee;
                                    romeon = undefined;
                                    if(yankee) { _fun00042_ip = 137; continue _fun00041 }
 128:
                                    yankee = _closure2_slot9;
                                    romeon = yankee.right;
 137:
                                    yankee = offset;
                                    yankee = yankee.right;
                                    yankee = foxtra.bind(michal)(romeon, yankee);
                                    verify['right'] = yankee;
                                    foxtra = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    yankee = golfie == yankee;
                                    romeon = undefined;
                                    if(yankee) { _fun00042_ip = 181; continue _fun00041 }
 172:
                                    yankee = _closure2_slot9;
                                    romeon = yankee.top;
 181:
                                    yankee = offset;
                                    yankee = yankee.top;
                                    yankee = foxtra.bind(michal)(romeon, yankee);
                                    verify['top'] = yankee;
                                    romeon = _closure1_slot20;
                                    yankee = _closure2_slot9;
                                    foxtra = golfie == yankee;
                                    yankee = undefined;
                                    if(foxtra) { _fun00042_ip = 225; continue _fun00041 }
 216:
                                    foxtra = _closure2_slot9;
                                    yankee = foxtra.bottom;
 225:
                                    offset = offset.bottom;
                                    offset = romeon.bind(michal)(yankee, offset);
                                    verify['bottom'] = offset;
                                    option['insets'] = verify;
                                    oscard['data'] = option;
                                    zuuluu = oscard;
 252: // try_start_0
                                    verify = _closure2_slot15;
                                    option = verify.injectJavaScript;
                                    offset = _closure1_slot1;
                                    yankee = _closure1_slot3;
                                    oscard = 29;
                                    oscard = yankee[oscard];
                                    offset = offset.bind(michal)(oscard);
                                    oscard = zuuluu;
                                    oscard = offset.bind(michal)(oscard);
                                    oscard = option.bind(verify)(oscard);
                                    SaveGenerator(address=299);
 297:
                                    return oscard;
 299:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(option) { _fun00042_ip = 307; continue _fun00041 }
 305: // try_end0
                                    _fun00042_ip = 359; continue _fun00041;
 307:
                                    return oscard;
 310: // catch_target0
                                    CatchBlockStart(arg_register=5);
                                    oscard = _closure2_slot30;
                                    oscard = oscard.current;
                                    if(!(golfie != oscard)) { _fun00042_ip = 359; continue _fun00041 }
 325:
                                    tangon = _closure2_slot31;
                                    oscard = _closure1_slot1;
                                    golfie = _closure1_slot3;
                                    report = 29;
                                    report = golfie[report];
                                    report = oscard.bind(michal)(report);
                                    zuuluu = report.bind(michal)(zuuluu);
                                    zuuluu = tangon.bind(michal)(zuuluu);
 359:
                                    return michal;
 362:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = undefined;
                            tangon = _closure4_slot0;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        return entity;
                    };
                    entity = undefined;
                    entity = tangon.bind(entity)();
                    entity = michal.bind(zuuluu)(entity);
 69:
                    entity = undefined;
                    return entity;
                }
            };
            report = papara.bind(status)(report, cntext);
            if(!(entity != config)) { _fun00010_ip = 2060; continue _fun00009 }
 1475:
            if(!(entity != source)) { _fun00010_ip = 2060; continue _fun00009 }
 1482:
            if(!tangon) { _fun00010_ip = 1492; continue _fun00009 }
 1485:
            if(!(option !== zuuluu)) { _fun00010_ip = 2060; continue _fun00009 }
 1492:
            tangon = {};
            cntext = _closure1_slot20;
            zuuluu = entity == yankee;
            report = undefined;
            if(zuuluu) { _fun00010_ip = 1512; continue _fun00009 }
 1507:
            report = yankee.left;
 1512:
            zuuluu = michal.left;
            zuuluu = cntext.bind(oscard)(report, zuuluu);
            tangon['left'] = zuuluu;
            cntext = _closure1_slot20;
            zuuluu = entity == yankee;
            report = undefined;
            if(zuuluu) { _fun00010_ip = 1545; continue _fun00009 }
 1540:
            report = yankee.right;
 1545:
            zuuluu = michal.right;
            zuuluu = cntext.bind(oscard)(report, zuuluu);
            tangon['right'] = zuuluu;
            cntext = _closure1_slot20;
            zuuluu = entity == yankee;
            report = undefined;
            if(zuuluu) { _fun00010_ip = 1578; continue _fun00009 }
 1573:
            report = yankee.top;
 1578:
            zuuluu = michal.top;
            zuuluu = cntext.bind(oscard)(report, zuuluu);
            tangon['top'] = zuuluu;
            report = _closure1_slot20;
            cntext = entity == yankee;
            zuuluu = undefined;
            if(cntext) { _fun00010_ip = 1611; continue _fun00009 }
 1606:
            zuuluu = yankee.bottom;
 1611:
            michal = michal.bottom;
            michal = report.bind(oscard)(zuuluu, michal);
            tangon['bottom'] = michal;
            tangon['imeInsetsBottom'] = sequen;
            michal = _closure1_slot17;
            yankee = undefined;
            if(!michal) { _fun00010_ip = 1671; continue _fun00009 }
 1640:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 19;
            michal = report[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.createInjectedJavascriptForIOS;
            yankee = michal.bind(zuuluu)(tangon);
 1671:
            zuuluu = entity == vacuum;
            michal = null;
            if(zuuluu) { _fun00010_ip = 2058; continue _fun00009 }
 1683:
            report = _closure1_slot14;
            tangon = _closure1_slot0;
            cntext = _closure1_slot3;
            zuuluu = 14;
            zuuluu = cntext[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            tangon = zuuluu.WebView;
            zuuluu = {};
            record = record.webView;
            zuuluu['style'] = record;
            zuuluu['ref'] = golfie;
            golfie = {};
            golfie['uri'] = config;
            zuuluu['source'] = golfie;
            golfie = {};
            config = source.port;
            if(!(target !== config)) { _fun00010_ip = 1787; continue _fun00009 }
 1751:
            papara = source.hostname;
            cntext = source.port;
            config = update.HermesInternal;
            record = config.concat;
            config = ':';
            config = record.bind(target)(papara, config, cntext);
            _fun00010_ip = 1793; continue _fun00009;
 1787:
            config = source.host;
 1793:
            golfie['domain'] = config;
            config = source.protocol;
            source = 'http:';
            source = source === config;
            golfie['httpAllowed'] = source;
            source = {};
            config = 'internal';
            source['type'] = config;
            update = update.HermesInternal;
            update = update.concat;
            config = '/';
            update = update.bind(config)(ctrled, config);
            source['path'] = update;
            ctrled = vacuum.substring;
            update = vacuum.lastIndexOf;
            update = update.bind(vacuum)(config);
            update = ctrled.bind(vacuum)(sequen, update);
            source['directory'] = update;
            update = new Array(1);
            update[0] = source;
            golfie['pathHandlers'] = update;
            zuuluu['androidAssetLoaderConfig'] = golfie;
            golfie = ['*'];
            zuuluu['originWhitelist'] = golfie;
            golfie = 'never';
            zuuluu['overScrollMode'] = golfie;
            zuuluu['scrollEnabled'] = option;
            golfie = true;
            zuuluu['cacheEnabled'] = golfie;
            zuuluu['onError'] = echoed;
            zuuluu['onContentProcessDidTerminate'] = result;
            zuuluu['onRenderProcessGone'] = output;
            zuuluu['webViewKey'] = kiloes;
            zuuluu['temporaryParentNodeTag'] = sizing;
            kiloes = entity != kiloes;
            zuuluu['messagingWithWebViewKeyEnabled'] = kiloes;
            zuuluu['onMessage'] = backup;
            foxtra = _closure1_slot17;
            zuuluu['allowFileAccess'] = foxtra;
            zuuluu['injectedJavaScript'] = yankee;
            zuuluu['injectedJavaScriptForMainFrameOnly'] = option;
            yankee = undefined;
            if(!foxtra) { _fun00010_ip = 2013; continue _fun00009 }
 2010:
            yankee = romeon;
 2013:
            zuuluu['onShouldStartLoadWithRequest'] = yankee;
            zuuluu['mediaPlaybackRequiresUserAction'] = option;
            zuuluu['ignoreSilentHardwareSwitch'] = offset;
            zuuluu['allowsInlineMediaPlayback'] = golfie;
            zuuluu['minimumFontSize'] = verify;
            zuuluu['bounces'] = option;
            zuuluu['allowsProtectedMedia'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 2058:
            return michal;
 2060:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();