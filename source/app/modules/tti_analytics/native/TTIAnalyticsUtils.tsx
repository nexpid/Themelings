// app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot23;
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
            golfie = _closure1_slot23;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
    var _closure1_slot23 = entity;
    tangon = function() { // Original name: getDeviceMetadata
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot15;
            michal = null;
            if(!(michal == zuuluu)) { _fun00008_ip = 266; continue _fun00007 }
 16:
            michal = {};
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 11;
            golfie = oscard[zuuluu];
            tangon = undefined;
            option = report.bind(tangon)(golfie);
            golfie = option.getDeviceModel;
            golfie = golfie.bind(option)();
            michal['device_model'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getDeviceBrand;
            golfie = golfie.bind(option)();
            michal['device_brand'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getDeviceProduct;
            golfie = golfie.bind(option)();
            michal['device_product'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getDeviceManufacturer;
            golfie = golfie.bind(option)();
            michal['device_manufacturer'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getSmallestScreenWidth;
            golfie = golfie.bind(option)();
            michal['smallest_screen_width'] = golfie;
            option = _closure1_slot1;
            golfie = 12;
            golfie = oscard[golfie];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.bind(tangon)();
            michal['device_performance_class'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getSocName;
            golfie = golfie.bind(option)();
            michal['soc_name'] = golfie;
            golfie = oscard[zuuluu];
            option = report.bind(tangon)(golfie);
            golfie = option.getRamSize;
            golfie = golfie.bind(option)();
            michal['ram_size'] = golfie;
            zuuluu = oscard[zuuluu];
            tangon = report.bind(tangon)(zuuluu);
            zuuluu = tangon.getMaxCpuFreq;
            zuuluu = zuuluu.bind(tangon)();
            michal['max_cpu_freq'] = zuuluu;
            _closure1_slot15 = michal;
 266:
            entity = _closure1_slot15;
            return entity;
        }
    };
    var _closure1_slot24 = tangon;
    entity = function() { // Original name: getRedesignScreenName
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 18;
            entity = zuuluu[entity];
            golfie = undefined;
            michal = michal.bind(golfie)(entity);
            entity = michal.getRootNavigationRef;
            report = entity.bind(michal)();
            entity = null;
            zuuluu = entity != report;
            michal = undefined;
            if(!zuuluu) { _fun00010_ip = 71; continue _fun00009 }
 46:
            zuuluu = report.isReady;
            zuuluu = zuuluu.bind(report)();
            michal = undefined;
            if(!zuuluu) { _fun00010_ip = 71; continue _fun00009 }
 61:
            zuuluu = report.getCurrentRoute;
            michal = zuuluu.bind(report)();
 71:
            if(!(entity != michal)) { _fun00010_ip = 807; continue _fun00009 }
 78:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 16;
            zuuluu = zuuluu[option];
            oscard = report.bind(golfie)(zuuluu);
            report = oscard.isModalOpen;
            zuuluu = _closure1_slot13;
            zuuluu = report.bind(oscard)(zuuluu);
            if(zuuluu) { _fun00010_ip = 801; continue _fun00009 }
 119:
            report = michal.name;
            zuuluu = 'panels';
            if(!(zuuluu !== report)) { _fun00010_ip = 365; continue _fun00009 }
 137:
            oscard = michal.name;
            zuuluu = michal.params;
            report = entity == zuuluu;
            michal = undefined;
            if(report) { _fun00010_ip = 162; continue _fun00009 }
 157:
            michal = zuuluu.channelId;
 162:
            zuuluu = 'channel';
            if(!(zuuluu === oscard)) { _fun00010_ip = 174; continue _fun00009 }
 170:
            if(!(entity == michal)) { _fun00010_ip = 200; continue _fun00009 }
 174:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            zuuluu = 'redesign-';
            zuuluu = report.bind(zuuluu)(oscard);
            return zuuluu;
 200:
            report = _closure1_slot14;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(michal);
            if(zuuluu) { _fun00010_ip = 363; continue _fun00009 }
 220:
            report = _closure1_slot9;
            zuuluu = report.getChannel;
            romeon = zuuluu.bind(report)(michal);
            report = entity != romeon;
            zuuluu = 'unknown-channel';
            if(!report) { _fun00010_ip = 361; continue _fun00009 }
 247:
            report = romeon.isThread;
            oscard = report.bind(romeon)();
            report = 'thread';
            if(oscard) { _fun00010_ip = 358; continue _fun00009 }
 264:
            oscard = romeon.isPrivate;
            verify = oscard.bind(romeon)();
            oscard = 'private_channel';
            if(verify) { _fun00010_ip = 355; continue _fun00009 }
 283:
            verify = romeon.isGuildVocal;
            offset = verify.bind(romeon)();
            verify = 'guild-voice';
            if(offset) { _fun00010_ip = 352; continue _fun00009 }
 302:
            offset = romeon.isForumLikeChannel;
            yankee = offset.bind(romeon)();
            offset = 'guild-forum';
            if(yankee) { _fun00010_ip = 349; continue _fun00009 }
 321:
            yankee = romeon.isDirectory;
            romeon = yankee.bind(romeon)();
            yankee = 'guild-text';
            if(!romeon) { _fun00010_ip = 346; continue _fun00009 }
 340:
            yankee = 'guild-directory';
 346:
            offset = yankee;
 349:
            verify = offset;
 352:
            oscard = verify;
 355:
            report = oscard;
 358:
            zuuluu = report;
 361:
            return zuuluu;
 363:
            return michal;
 365:
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 15;
            michal = report[michal];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getHistory;
            michal = michal.bind(zuuluu)();
            michal = michal.location;
            michal = michal.pathname;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.INDEX;
            if(!(michal === zuuluu)) { _fun00010_ip = 430; continue _fun00009 }
 420:
            zuuluu = _closure1_slot10;
            michal = zuuluu.defaultRoute;
 430:
            report = michal.startsWith;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.LOGIN;
            zuuluu = report.bind(michal)(zuuluu);
            report = 'app_landing';
            oscard = michal;
            michal = report;
            if(zuuluu) { _fun00010_ip = 799; continue _fun00009 }
 469:
            verify = oscard.startsWith;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.REGISTER;
            zuuluu = verify.bind(oscard)(zuuluu);
            michal = report;
            if(zuuluu) { _fun00010_ip = 799; continue _fun00009 }
 499:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            option = report.bind(golfie)(zuuluu);
            report = option.isModalOpen;
            zuuluu = _closure1_slot13;
            zuuluu = report.bind(option)(zuuluu);
            michal = 'invite';
            if(zuuluu) { _fun00010_ip = 799; continue _fun00009 }
 541:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.FRIENDS;
            michal = 'friends_list';
            if(!(oscard !== zuuluu)) { _fun00010_ip = 799; continue _fun00009 }
 564:
            report = oscard.startsWith;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.ME;
            zuuluu = report.bind(oscard)(zuuluu);
            michal = 'private_channel';
            if(zuuluu) { _fun00010_ip = 799; continue _fun00009 }
 597:
            report = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 17;
            zuuluu = option[zuuluu];
            report = report.bind(golfie)(zuuluu);
            zuuluu = report.tryParseChannelPath;
            zuuluu = zuuluu.bind(report)(oscard);
            report = entity != zuuluu;
            michal = 'other';
            if(!report) { _fun00010_ip = 799; continue _fun00009 }
 642:
            report = zuuluu.channelId;
            report = entity != report;
            michal = 'channel-list';
            if(!report) { _fun00010_ip = 799; continue _fun00009 }
 663:
            golfie = _closure1_slot14;
            oscard = golfie.has;
            report = zuuluu.channelId;
            report = oscard.bind(golfie)(report);
            if(report) { _fun00010_ip = 794; continue _fun00009 }
 685:
            oscard = _closure1_slot9;
            report = oscard.getChannel;
            tangon = zuuluu.channelId;
            option = report.bind(oscard)(tangon);
            report = entity != option;
            tangon = 'unknown-channel';
            if(!report) { _fun00010_ip = 789; continue _fun00009 }
 717:
            report = option.isGuildVocal;
            oscard = report.bind(option)();
            report = 'guild-voice';
            if(oscard) { _fun00010_ip = 786; continue _fun00009 }
 736:
            oscard = option.isForumLikeChannel;
            golfie = oscard.bind(option)();
            oscard = 'guild-forum';
            if(golfie) { _fun00010_ip = 783; continue _fun00009 }
 755:
            golfie = option.isDirectory;
            option = golfie.bind(option)();
            golfie = 'guild-text';
            if(!option) { _fun00010_ip = 780; continue _fun00009 }
 774:
            golfie = 'guild-directory';
 780:
            oscard = golfie;
 783:
            report = oscard;
 786:
            tangon = report;
 789:
            michal = tangon;
            _fun00010_ip = 799; continue _fun00009;
 794:
            michal = zuuluu.channelId;
 799:
            return michal;
 801:
            michal = 'invite';
            return michal;
 807:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: sharedProperties
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.TTIManager;
            tangon = entity.AppOpenedTimestamp;
            entity = {};
            michal = _closure1_slot16;
            entity['load_id'] = michal;
            michal = global;
            report = michal.Date;
            michal = report.now;
            michal = michal.bind(report)();
            michal = michal - tangon;
            entity['duration_ms_since_app_opened'] = michal;
            michal = argFoo;
            entity['screen_name'] = michal;
            michal = argBar;
            entity['has_cached_data'] = michal;
            michal = _closure1_slot17;
            tangon = michal.length;
            michal = 0;
            tangon = tangon > michal;
            michal = null;
            if(!tangon) { _fun00012_ip = 102; continue _fun00011 }
 98:
            michal = _closure1_slot17;
 102:
            entity['manifest'] = michal;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _logLegacyAppUiViewed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    offset = argCor;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 365; continue _fun00013 }
 13:
                    oscard = _closure1_slot26;
                    zuuluu = undefined;
                    report = argFoo;
                    michal = argBaz;
                    romeon = oscard.bind(zuuluu)(report, michal);
                    michal = _closure1_slot4;
                    report = michal.TTIManager;
                    michal = report.getJSBundleTimestamps;
                    michal = michal.bind(report)();
                    SaveGenerator(address=60);
 58:
                    return michal;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00014_ip = 362; continue _fun00013 }
 69:
                    yankee = michal.JSBundleLoadedTimestamp;
                    verify = michal.JSBundleParsedTimestamp;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 19;
                    option = golfie[report];
                    backup = oscard.bind(zuuluu)(option);
                    foxtra = backup.markAt;
                    kiloes = '🏃';
                    option = 'JS Bundle Loaded';
                    option = foxtra.bind(backup)(kiloes, option, yankee);
                    option = golfie[report];
                    backup = oscard.bind(zuuluu)(option);
                    foxtra = backup.mark;
                    option = 'app_ui_viewed logged';
                    option = foxtra.bind(backup)(kiloes, option);
                    option = golfie[report];
                    kiloes = oscard.bind(zuuluu)(option);
                    backup = kiloes.addDetail;
                    option = offset - verify;
                    foxtra = option - 0;
                    option = 'Since Bundle Parsed';
                    option = backup.bind(kiloes)(option, foxtra);
                    report = golfie[report];
                    option = oscard.bind(zuuluu)(report);
                    report = global;
                    foxtra = report.Date;
                    report = foxtra.now;
                    foxtra = report.bind(foxtra)();
                    report = 20000;
                    report = foxtra + report;
                    option['endTime'] = report;
                    report = 21;
                    report = golfie[report];
                    option = oscard.bind(zuuluu)(report);
                    golfie = option.track;
                    report = _closure1_slot11;
                    oscard = report.APP_UI_VIEWED;
                    report = {};
                    result = report;
                    output = romeon;
                    romeon = copyDataProperties(result, output);
                    romeon = _closure1_slot24;
                    output = romeon.bind(zuuluu)();
                    result = report;
                    romeon = copyDataProperties(result, output);
                    romeon = offset - yankee;
                    yankee = 'duration_ms_since_required_js_bundle_loaded';
                    report[yankee] = romeon;
                    offset = offset - verify;
                    verify = 'duration_ms_since_required_js_bundle_parsed';
                    report[verify] = offset;
                    tangon = _closure1_slot7;
                    verify = tangon.theme;
                    tangon = 'theme';
                    report[tangon] = verify;
                    output = argBar;
                    result = report;
                    tangon = copyDataProperties(result, output);
                    tangon = {};
                    verify = true;
                    tangon['logEventProperties'] = verify;
                    tangon = golfie.bind(option)(oscard, report, tangon);
                    return zuuluu;
 362:
                    return michal;
 365:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: trackAppUIViewed2
        entity = undefined;
        tangon = _closure1_slot29;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _trackAppUIViewed
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 386; continue _fun00015 }
 12:
                    zuuluu = undefined;
                    var _closure4_slot0 = zuuluu;
                    michal = _closure1_slot25;
                    michal = michal.bind(zuuluu)();
                    option = null;
                    report = option != michal;
                    oscard = 'unknown';
                    if(!report) { _fun00016_ip = 45; continue _fun00015 }
 42:
                    oscard = michal;
 45:
                    michal = _closure1_slot4;
                    michal = michal.TTIManager;
                    report = michal.AppOpenedTimestamp;
                    _closure4_slot0 = report;
                    michal = _closure1_slot4;
                    michal = michal.TTIManager;
                    michal = michal.getAllNativeTimestamps;
                    verify = option == michal;
                    michal = undefined;
                    if(verify) { _fun00016_ip = 134; continue _fun00015 }
 90:
                    verify = _closure1_slot4;
                    offset = verify.TTIManager;
                    verify = offset.getAllNativeTimestamps;
                    offset = verify.bind(offset)();
                    option = option == offset;
                    michal = undefined;
                    if(option) { _fun00016_ip = 134; continue _fun00015 }
 119:
                    verify = offset.then;
                    option = function(argFoo) {
                        report = argFoo;
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 19;
                        michal = tangon[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        oscard = michal.logGroups;
                        michal = 0;
                        michal = oscard[michal];
                        michal['nativeLogs'] = report;
                        michal = 24;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.processNativeLogs;
                        michal = _closure4_slot0;
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    };
                    michal = verify.bind(offset)(option);
 134:
                    SaveGenerator(address=138);
 136:
                    return michal;
 138:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(option) { _fun00016_ip = 383; continue _fun00015 }
 147:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    option = 19;
                    option = backup[option];
                    yankee = foxtra.bind(zuuluu)(option);
                    offset = yankee.mark;
                    verify = '❗';
                    option = 'Track app_ui_viewed2';
                    option = offset.bind(yankee)(verify, option);
                    option = 21;
                    option = backup[option];
                    romeon = foxtra.bind(zuuluu)(option);
                    yankee = romeon.track;
                    option = _closure1_slot11;
                    offset = option.APP_UI_VIEWED2;
                    verify = {};
                    option = _closure1_slot24;
                    sizing = option.bind(zuuluu)();
                    output = verify;
                    option = copyDataProperties(output, sizing);
                    option = 24;
                    option = backup[option];
                    foxtra = foxtra.bind(zuuluu)(option);
                    option = foxtra.serializeTTITracker;
                    sizing = option.bind(foxtra)(report);
                    output = verify;
                    option = copyDataProperties(output, sizing);
                    foxtra = _closure1_slot16;
                    option = 'load_id';
                    verify[option] = foxtra;
                    option = 'screen_name';
                    verify[option] = oscard;
                    foxtra = _closure1_slot5;
                    option = foxtra.hasCache;
                    foxtra = option.bind(foxtra)();
                    option = 'has_cached_data';
                    verify[option] = foxtra;
                    option = _closure1_slot7;
                    foxtra = option.theme;
                    option = 'theme';
                    verify[option] = foxtra;
                    option = {};
                    foxtra = true;
                    option['logEventProperties'] = foxtra;
                    option = yankee.bind(romeon)(offset, verify, option);
                    golfie = _closure1_slot4;
                    option = golfie.TTIManager;
                    golfie = option.runningTTIAutomation;
                    golfie = golfie.bind(option)();
                    if(!golfie) { _fun00016_ip = 380; continue _fun00015 }
 369:
                    tangon = function(argFoo, argBar) { // Original name: logToDevice
                        golfie = {};
                        zuuluu = _closure1_slot24;
                        entity = undefined;
                        offset = zuuluu.bind(entity)();
                        yankee = golfie;
                        zuuluu = copyDataProperties(yankee, offset);
                        report = _closure1_slot1;
                        oscard = _closure1_slot2;
                        zuuluu = 24;
                        zuuluu = oscard[zuuluu];
                        oscard = report.bind(entity)(zuuluu);
                        report = oscard.serializeTTITracker;
                        zuuluu = argFoo;
                        offset = report.bind(oscard)(zuuluu);
                        yankee = golfie;
                        zuuluu = copyDataProperties(yankee, offset);
                        report = _closure1_slot16;
                        zuuluu = 'load_id';
                        golfie[zuuluu] = report;
                        report = argBar;
                        zuuluu = 'screen_name';
                        golfie[zuuluu] = report;
                        report = _closure1_slot5;
                        zuuluu = report.hasCache;
                        report = zuuluu.bind(report)();
                        zuuluu = 'has_cached_data';
                        golfie[zuuluu] = report;
                        zuuluu = _closure1_slot7;
                        report = zuuluu.theme;
                        zuuluu = 'theme';
                        golfie[zuuluu] = report;
                        zuuluu = global;
                        oscard = zuuluu.Date;
                        report = oscard.now;
                        oscard = report.bind(oscard)();
                        report = 'logged_at';
                        golfie[report] = oscard;
                        oscard = _closure1_slot8;
                        report = oscard.getId;
                        oscard = report.bind(oscard)();
                        report = 'user_id';
                        golfie[report] = oscard;
                        oscard = zuuluu.Date;
                        report = oscard.now;
                        report = report.bind(oscard)();
                        var _closure5_slot0 = report;
                        oscard = _closure1_slot30;
                        verify = oscard.bind(entity)(golfie);
                        option = verify.forEach;
                        golfie = function(argFoo) {
                            entity = _closure1_slot4;
                            zuuluu = entity.TTIManager;
                            michal = zuuluu.logToDevice;
                            entity = global;
                            report = entity.JSON;
                            tangon = report.stringify;
                            entity = {};
                            option = argFoo;
                            verify = entity;
                            oscard = copyDataProperties(verify, option);
                            golfie = 'app_ui_viewed';
                            oscard = 'type';
                            entity[oscard] = golfie;
                            golfie = _closure5_slot0;
                            oscard = 'batch_id';
                            entity[oscard] = golfie;
                            entity = tangon.bind(report)(entity);
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        golfie = option.bind(verify)(golfie);
                        report = report + 1;
                        _closure5_slot0 = report;
                        golfie = _closure1_slot6;
                        report = golfie.getAllExperimentAssignments;
                        report = report.bind(golfie)();
                        oscard = oscard.bind(entity)(report);
                        report = oscard.forEach;
                        tangon = function(argFoo) {
                            entity = _closure1_slot4;
                            zuuluu = entity.TTIManager;
                            michal = zuuluu.logToDevice;
                            entity = global;
                            report = entity.JSON;
                            tangon = report.stringify;
                            entity = {};
                            option = argFoo;
                            verify = entity;
                            oscard = copyDataProperties(verify, option);
                            golfie = _closure5_slot0;
                            oscard = 'batch_id';
                            entity[oscard] = golfie;
                            golfie = 'experiments';
                            oscard = 'type';
                            entity[oscard] = golfie;
                            entity = tangon.bind(report)(entity);
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        tangon = report.bind(oscard)(tangon);
                        tangon = _closure1_slot4;
                        report = tangon.TTIManager;
                        tangon = report.logToDevice;
                        golfie = zuuluu.JSON;
                        oscard = golfie.stringify;
                        zuuluu = {};
                        option = 'finished';
                        zuuluu['type'] = option;
                        zuuluu = oscard.bind(golfie)(zuuluu);
                        zuuluu = tangon.bind(report)(zuuluu);
                        michal = _closure1_slot4;
                        zuuluu = michal.TTIManager;
                        michal = zuuluu.trackTTILogged;
                        michal = michal.bind(zuuluu)();
                        return entity;
                    };
                    tangon = tangon.bind(zuuluu)(report, oscard);
 380:
                    return zuuluu;
 383:
                    return michal;
 386:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot29 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: batchKeys
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            option = argFoo;
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            golfie = entity.bind(michal)(option);
            entity = new Array(0);
            michal = golfie.length;
            oscard = 0;
            michal = oscard < michal;
            tangon = 10;
            zuuluu = undefined;
            if(!michal) { _fun00018_ip = 135; continue _fun00017 }
 47:
            offset = {};
            yankee = _closure1_slot22;
            michal = golfie.slice;
            verify = oscard + tangon;
            michal = michal.bind(golfie)(oscard, verify);
            romeon = yankee.bind(zuuluu)(michal);
            yankee = romeon.bind(zuuluu)();
            michal = yankee.done;
            if(michal) { _fun00018_ip = 113; continue _fun00017 }
 85:
            foxtra = yankee.value;
            michal = option[foxtra];
            offset[foxtra] = michal;
            foxtra = romeon.bind(zuuluu)();
            michal = foxtra.done;
            yankee = foxtra;
            if(!michal) { _fun00018_ip = 85; continue _fun00017 }
 113:
            michal = entity.push;
            michal = michal.bind(entity)(offset);
            michal = golfie.length;
            oscard = verify;
            if(oscard < michal) { _fun00018_ip = 47; continue _fun00017 }
 135:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = golfie[entity];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.NativeModules;
    var _closure1_slot4 = option;
    option = 2;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = golfie[option];
    option = verify.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.AnalyticEvents;
    var _closure1_slot11 = verify;
    option = option.Routes;
    var _closure1_slot12 = option;
    option = 9;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot13 = option;
    option = 10;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    option = option.StaticChannelRoutes;
    var _closure1_slot14 = option;
    option = null;
    var _closure1_slot15 = option;
    option = 13;
    option = golfie[option];
    verify = oscard.bind(entity)(option);
    option = verify.v4;
    option = option.bind(verify)();
    var _closure1_slot16 = option;
    option = 14;
    verify = golfie[option];
    option = argCor;
    verify = option.bind(entity)(verify);
    option = verify.getConstants;
    option = option.bind(verify)();
    option = option.Manifest;
    var _closure1_slot17 = option;
    option = false;
    var _closure1_slot18 = option;
    var _closure1_slot19 = option;
    offset = report.Set;
    option = offset.prototype;
    verify = Object.create(option, {constructor: {value: offset}});
    backup = ['private_channel', 'guild-forum', 'guild-directory', 'guild-text', 'thread', 'redesign-guilds', 'redesign-messages'];
    kiloes = verify;
    option = new kiloes[offset](backup, foxtra);
    option = option instanceof Object ? option : verify;
    var _closure1_slot20 = option;
    verify = report.Set;
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    backup = ['friends_list', 'guild-voice', 'redesign-guild-voice', 'unknown-channel', 'redesign-unknown-channel', 'channel-list', 'other'];
    kiloes = option;
    report = new kiloes[verify](backup, foxtra);
    report = report instanceof Object ? report : option;
    var _closure1_slot21 = report;
    report = 25;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/tti_analytics/native/TTIAnalyticsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getDeviceMetadata'] = tangon;
    tangon = function() { // Original name: currentLoadId
        entity = _closure1_slot16;
        return entity;
    };
    zuuluu['currentLoadId'] = tangon;
    tangon = function(argFoo) { // Original name: trackAppOpened
        option = argFoo;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 19;
        zuuluu = report[entity];
        entity = undefined;
        verify = tangon.bind(entity)(zuuluu);
        golfie = verify.mark;
        oscard = '🏃';
        zuuluu = 'Track app_opened';
        zuuluu = golfie.bind(verify)(oscard, zuuluu);
        zuuluu = 20;
        zuuluu = report[zuuluu];
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.addBreadcrumb;
        zuuluu = {'category': 'lifecycle', 'message': 'App opened'};
        verify = {};
        verify['openFrom'] = option;
        zuuluu['data'] = verify;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = 21;
        zuuluu = report[zuuluu];
        oscard = tangon.bind(entity)(zuuluu);
        report = oscard.track;
        zuuluu = _closure1_slot11;
        tangon = zuuluu.APP_OPENED;
        zuuluu = {};
        golfie = _closure1_slot24;
        romeon = golfie.bind(entity)();
        foxtra = zuuluu;
        golfie = copyDataProperties(foxtra, romeon);
        golfie = 'opened_from';
        zuuluu[golfie] = option;
        option = _closure1_slot16;
        golfie = 'load_id';
        zuuluu[golfie] = option;
        michal = _closure1_slot7;
        golfie = michal.theme;
        michal = 'theme';
        zuuluu[michal] = golfie;
        michal = {};
        golfie = true;
        michal['logEventProperties'] = golfie;
        michal = report.bind(oscard)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['trackAppOpened'] = tangon;
    tangon = function() { // Original name: trackAppUIViewed
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = arguments[0];
            tangon = arguments[1];
            zuuluu = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun00020_ip = 28; continue _fun00019 }
 17:
            oscard = _closure1_slot25;
            report = oscard.bind(entity)();
 28:
            var _closure2_slot0 = report;
            if(!(tangon === entity)) { _fun00020_ip = 38; continue _fun00019 }
 36:
            tangon = {};
 38:
            var _closure2_slot1 = tangon;
            if(!(zuuluu === entity)) { _fun00020_ip = 63; continue _fun00019 }
 46:
            report = _closure1_slot5;
            tangon = report.hasCache;
            zuuluu = tangon.bind(report)();
 63:
            var _closure2_slot2 = zuuluu;
            var _closure2_slot3 = entity;
            tangon = _closure1_slot18;
            if(tangon) { _fun00020_ip = 291; continue _fun00019 }
 84:
            tangon = true;
            _closure1_slot18 = tangon;
            tangon = _closure1_slot4;
            tangon = tangon.TTIManager;
            yankee = tangon.AppOpenedTimestamp;
            tangon = global;
            oscard = tangon.Date;
            report = oscard.now;
            report = report.bind(oscard)();
            _closure2_slot3 = report;
            golfie = report - yankee;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            report = 19;
            verify = option[report];
            foxtra = oscard.bind(entity)(verify);
            romeon = foxtra.mark;
            offset = '❗';
            verify = 'Track app_ui_viewed';
            verify = romeon.bind(foxtra)(offset, verify);
            verify = option[report];
            romeon = oscard.bind(entity)(verify);
            offset = romeon.addDetail;
            verify = 'TTI';
            verify = offset.bind(romeon)(verify, golfie);
            report = option[report];
            offset = oscard.bind(entity)(report);
            verify = offset.markAt;
            oscard = '🏃';
            report = 'app_opened';
            report = verify.bind(offset)(oscard, report, yankee);
            oscard = _closure1_slot0;
            report = 22;
            report = option[report];
            oscard = oscard.bind(entity)(report);
            report = oscard.ttiRecorded;
            report = report.bind(oscard)(golfie);
            tangon = tangon.setTimeout;
            zuuluu = _closure1_slot3;
            michal = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00022_ip = 88; continue _fun00021 }
 9:
                        report = _closure2_slot0;
                        zuuluu = null;
                        zuuluu = zuuluu != report;
                        option = 'unknownn';
                        if(!zuuluu) { _fun00022_ip = 35; continue _fun00021 }
 31:
                        option = _closure2_slot0;
 35:
                        yankee = _closure2_slot1;
                        offset = _closure2_slot2;
                        verify = _closure2_slot3;
                        michal = function() { // Original name: logLegacyAppUiViewed
                            entity = undefined;
                            tangon = _closure1_slot27;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        zuuluu = undefined;
                        foxtra = undefined;
                        romeon = option;
                        michal = foxtra[michal](romeon, yankee, offset, verify, option);
                        SaveGenerator(address=67);
 65:
                        return michal;
 67:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00022_ip = 85; continue _fun00021 }
 73:
                        tangon = function() { // Original name: scheduleTrackAppUiViewed2
                            entity = global;
                            golfie = entity.setTimeout;
                            oscard = _closure1_slot28;
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            entity = 23;
                            zuuluu = report[entity];
                            entity = undefined;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            zuuluu = zuuluu.Millis;
                            option = zuuluu.SECOND;
                            zuuluu = 15;
                            zuuluu = zuuluu * option;
                            zuuluu = golfie.bind(entity)(oscard, zuuluu);
                            var _closure5_slot0 = zuuluu;
                            zuuluu = 24;
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.setTTICallback;
                            michal = function() {
                                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                    entity = _closure1_slot25;
                                    report = undefined;
                                    oscard = entity.bind(report)();
                                    golfie = null;
                                    entity = golfie == oscard;
                                    zuuluu = false;
                                    if(entity) { _fun00024_ip = 227; continue _fun00023 }
 27:
                                    option = _closure1_slot21;
                                    entity = option.has;
                                    entity = entity.bind(option)(oscard);
                                    if(!entity) { _fun00024_ip = 88; continue _fun00023 }
 44:
                                    option = _closure1_slot1;
                                    verify = _closure1_slot2;
                                    entity = 24;
                                    entity = verify[entity];
                                    entity = option.bind(report)(entity);
                                    option = entity.readySupplemental;
                                    entity = option.hasData;
                                    entity = entity.bind(option)();
                                    zuuluu = false;
                                    if(!entity) { _fun00024_ip = 227; continue _fun00023 }
 88:
                                    tangon = _closure1_slot20;
                                    entity = tangon.has;
                                    entity = entity.bind(tangon)(oscard);
                                    zuuluu = true;
                                    if(!entity) { _fun00024_ip = 227; continue _fun00023 }
 107:
                                    tangon = _closure1_slot1;
                                    entity = _closure1_slot2;
                                    verify = 24;
                                    entity = entity[verify];
                                    entity = tangon.bind(report)(entity);
                                    tangon = entity.readySupplemental;
                                    entity = tangon.hasData;
                                    entity = entity.bind(tangon)();
                                    tangon = !entity;
                                    entity = !tangon;
                                    if(tangon) { _fun00024_ip = 224; continue _fun00023 }
 152:
                                    oscard = _closure1_slot1;
                                    tangon = _closure1_slot2;
                                    tangon = tangon[verify];
                                    tangon = oscard.bind(report)(tangon);
                                    oscard = tangon.renderLatestMessages;
                                    tangon = oscard.hasData;
                                    tangon = tangon.bind(oscard)();
                                    oscard = !tangon;
                                    tangon = !oscard;
                                    if(!oscard) { _fun00024_ip = 221; continue _fun00023 }
 194:
                                    option = _closure1_slot1;
                                    oscard = _closure1_slot2;
                                    oscard = oscard[verify];
                                    oscard = option.bind(report)(oscard);
                                    oscard = oscard.interstitial;
                                    tangon = golfie != oscard;
 221:
                                    entity = tangon;
 224:
                                    zuuluu = entity;
 227:
                                    entity = !zuuluu;
                                    entity = !entity;
                                    if(!zuuluu) { _fun00024_ip = 280; continue _fun00023 }
 236:
                                    zuuluu = global;
                                    oscard = zuuluu.clearTimeout;
                                    tangon = _closure5_slot0;
                                    tangon = oscard.bind(report)(tangon);
                                    tangon = zuuluu.setTimeout;
                                    zuuluu = _closure1_slot28;
                                    michal = 500;
                                    michal = tangon.bind(report)(zuuluu, michal);
                                    entity = true;
 280:
                                    return entity;
                                }
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        tangon = tangon.bind(zuuluu)();
                        return zuuluu;
 85:
                        return michal;
 88:
                        return entity;
                    }
                };
                return entity;
            };
            zuuluu = zuuluu.bind(entity)(michal);
            michal = 1000;
            michal = tangon.bind(entity)(zuuluu, michal);
 291:
            return entity;
        }
    };
    zuuluu['trackAppUIViewed'] = tangon;
    michal = function() { // Original name: trackAppLaunchCompleted
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            verify = arguments[0];
            report = arguments[1];
            entity = undefined;
            if(!(verify === entity)) { _fun00026_ip = 23; continue _fun00025 }
 12:
            michal = _closure1_slot25;
            verify = michal.bind(entity)();
 23:
            if(!(report === entity)) { _fun00026_ip = 44; continue _fun00025 }
 27:
            zuuluu = _closure1_slot5;
            michal = zuuluu.hasCache;
            report = michal.bind(zuuluu)();
 44:
            michal = _closure1_slot19;
            if(michal) { _fun00026_ip = 169; continue _fun00025 }
 54:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 19;
            michal = oscard[michal];
            offset = tangon.bind(entity)(michal);
            option = offset.mark;
            golfie = '🏃';
            michal = 'Track app_launch';
            michal = option.bind(offset)(golfie, michal);
            michal = 21;
            michal = oscard[michal];
            option = tangon.bind(entity)(michal);
            golfie = option.track;
            michal = _closure1_slot11;
            oscard = michal.APP_LAUNCH_COMPLETED;
            tangon = _closure1_slot26;
            michal = null;
            offset = michal != verify;
            michal = 'unknown';
            if(!offset) { _fun00026_ip = 143; continue _fun00025 }
 140:
            michal = verify;
 143:
            report = tangon.bind(entity)(michal, report);
            tangon = {};
            michal = true;
            tangon['logEventProperties'] = michal;
            tangon = golfie.bind(option)(oscard, report, tangon);
            _closure1_slot19 = michal;
 169:
            return entity;
        }
    };
    zuuluu['trackAppLaunchCompleted'] = michal;
    return entity;
})();