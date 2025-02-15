// app/modules/tti_analytics/native/TTIAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun58795: for(var _fun58795_ip = 0; ; ) switch(_fun58795_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun58795_ip = 46; continue _fun58795 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun58795_ip = 55; continue _fun58795 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun58795_ip = 343; continue _fun58795 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun58795_ip = 323; continue _fun58795 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun58795_ip = 283; continue _fun58795 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun58795_ip = 270; continue _fun58795 }
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
            if(!golf) { _fun58795_ip = 163; continue _fun58795 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun58795_ip = 179; continue _fun58795 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun58795_ip = 249; continue _fun58795 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun58795_ip = 249; continue _fun58795 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun58795_ip = 234; continue _fun58795 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun58795_ip = 247; continue _fun58795 }
 234:
            verify = _closure1_slot23;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun58795_ip = 265; continue _fun58795;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun58795_ip = 283; continue _fun58795;
 270:
            golf = _closure1_slot23;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun58795_ip = 323; continue _fun58795 }
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
            if(!tango) { _fun58795_ip = 330; continue _fun58795 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun58796: for(var _fun58796_ip = 0; ; ) switch(_fun58796_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun58796_ip = 56; continue _fun58796 }
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
                    _fun58796_ip = 67; continue _fun58796;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun58797: for(var _fun58797_ip = 0; ; ) switch(_fun58797_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun58797_ip = 23; continue _fun58797 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun58797_ip = 33; continue _fun58797 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun58797_ip = 70; continue _fun58797 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun58797_ip = 55; continue _fun58797 }
 70:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    tango = function() { // Original name: getDeviceMetadata
        _fun58798: for(var _fun58798_ip = 0; ; ) switch(_fun58798_ip) {
 0:
            zulu = _closure1_slot15;
            mike = null;
            if(!(mike == zulu)) { _fun58798_ip = 266; continue _fun58798 }
 16:
            mike = {};
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 11;
            golf = oscar[zulu];
            tango = undefined;
            options = report.bind(tango)(golf);
            golf = options.getDeviceModel;
            golf = golf.bind(options)();
            mike['device_model'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getDeviceBrand;
            golf = golf.bind(options)();
            mike['device_brand'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getDeviceProduct;
            golf = golf.bind(options)();
            mike['device_product'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getDeviceManufacturer;
            golf = golf.bind(options)();
            mike['device_manufacturer'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getSmallestScreenWidth;
            golf = golf.bind(options)();
            mike['smallest_screen_width'] = golf;
            options = _closure1_slot1;
            golf = 12;
            golf = oscar[golf];
            golf = options.bind(tango)(golf);
            golf = golf.bind(tango)();
            mike['device_performance_class'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getSocName;
            golf = golf.bind(options)();
            mike['soc_name'] = golf;
            golf = oscar[zulu];
            options = report.bind(tango)(golf);
            golf = options.getRamSize;
            golf = golf.bind(options)();
            mike['ram_size'] = golf;
            zulu = oscar[zulu];
            tango = report.bind(tango)(zulu);
            zulu = tango.getMaxCpuFreq;
            zulu = zulu.bind(tango)();
            mike['max_cpu_freq'] = zulu;
            _closure1_slot15 = mike;
 266:
            entity = _closure1_slot15;
            return entity;
        }
    };
    var _closure1_slot24 = tango;
    entity = function() { // Original name: getRedesignScreenName
        _fun58799: for(var _fun58799_ip = 0; ; ) switch(_fun58799_ip) {
 0:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 18;
            entity = zulu[entity];
            golf = undefined;
            mike = mike.bind(golf)(entity);
            entity = mike.getRootNavigationRef;
            report = entity.bind(mike)();
            entity = null;
            zulu = entity != report;
            mike = undefined;
            if(!zulu) { _fun58799_ip = 71; continue _fun58799 }
 46:
            zulu = report.isReady;
            zulu = zulu.bind(report)();
            mike = undefined;
            if(!zulu) { _fun58799_ip = 71; continue _fun58799 }
 61:
            zulu = report.getCurrentRoute;
            mike = zulu.bind(report)();
 71:
            if(!(entity != mike)) { _fun58799_ip = 807; continue _fun58799 }
 78:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            options = 16;
            zulu = zulu[options];
            oscar = report.bind(golf)(zulu);
            report = oscar.isModalOpen;
            zulu = _closure1_slot13;
            zulu = report.bind(oscar)(zulu);
            if(zulu) { _fun58799_ip = 801; continue _fun58799 }
 119:
            report = mike.name;
            zulu = 'panels';
            if(!(zulu !== report)) { _fun58799_ip = 365; continue _fun58799 }
 137:
            oscar = mike.name;
            zulu = mike.params;
            report = entity == zulu;
            mike = undefined;
            if(report) { _fun58799_ip = 162; continue _fun58799 }
 157:
            mike = zulu.channelId;
 162:
            zulu = 'channel';
            if(!(zulu === oscar)) { _fun58799_ip = 174; continue _fun58799 }
 170:
            if(!(entity == mike)) { _fun58799_ip = 200; continue _fun58799 }
 174:
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            zulu = 'redesign-';
            zulu = report.bind(zulu)(oscar);
            return zulu;
 200:
            report = _closure1_slot14;
            zulu = report.has;
            zulu = zulu.bind(report)(mike);
            if(zulu) { _fun58799_ip = 363; continue _fun58799 }
 220:
            report = _closure1_slot9;
            zulu = report.getChannel;
            romeo = zulu.bind(report)(mike);
            report = entity != romeo;
            zulu = 'unknown-channel';
            if(!report) { _fun58799_ip = 361; continue _fun58799 }
 247:
            report = romeo.isThread;
            oscar = report.bind(romeo)();
            report = 'thread';
            if(oscar) { _fun58799_ip = 358; continue _fun58799 }
 264:
            oscar = romeo.isPrivate;
            verify = oscar.bind(romeo)();
            oscar = 'private_channel';
            if(verify) { _fun58799_ip = 355; continue _fun58799 }
 283:
            verify = romeo.isGuildVocal;
            offset = verify.bind(romeo)();
            verify = 'guild-voice';
            if(offset) { _fun58799_ip = 352; continue _fun58799 }
 302:
            offset = romeo.isForumLikeChannel;
            yankee = offset.bind(romeo)();
            offset = 'guild-forum';
            if(yankee) { _fun58799_ip = 349; continue _fun58799 }
 321:
            yankee = romeo.isDirectory;
            romeo = yankee.bind(romeo)();
            yankee = 'guild-text';
            if(!romeo) { _fun58799_ip = 346; continue _fun58799 }
 340:
            yankee = 'guild-directory';
 346:
            offset = yankee;
 349:
            verify = offset;
 352:
            oscar = verify;
 355:
            report = oscar;
 358:
            zulu = report;
 361:
            return zulu;
 363:
            return mike;
 365:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 15;
            mike = report[mike];
            zulu = zulu.bind(golf)(mike);
            mike = zulu.getHistory;
            mike = mike.bind(zulu)();
            mike = mike.location;
            mike = mike.pathname;
            zulu = _closure1_slot12;
            zulu = zulu.INDEX;
            if(!(mike === zulu)) { _fun58799_ip = 430; continue _fun58799 }
 420:
            zulu = _closure1_slot10;
            mike = zulu.defaultRoute;
 430:
            report = mike.startsWith;
            zulu = _closure1_slot12;
            zulu = zulu.LOGIN;
            zulu = report.bind(mike)(zulu);
            report = 'app_landing';
            oscar = mike;
            mike = report;
            if(zulu) { _fun58799_ip = 799; continue _fun58799 }
 469:
            verify = oscar.startsWith;
            zulu = _closure1_slot12;
            zulu = zulu.REGISTER;
            zulu = verify.bind(oscar)(zulu);
            mike = report;
            if(zulu) { _fun58799_ip = 799; continue _fun58799 }
 499:
            report = _closure1_slot0;
            zulu = _closure1_slot2;
            zulu = zulu[options];
            options = report.bind(golf)(zulu);
            report = options.isModalOpen;
            zulu = _closure1_slot13;
            zulu = report.bind(options)(zulu);
            mike = 'invite';
            if(zulu) { _fun58799_ip = 799; continue _fun58799 }
 541:
            zulu = _closure1_slot12;
            zulu = zulu.FRIENDS;
            mike = 'friends_list';
            if(!(oscar !== zulu)) { _fun58799_ip = 799; continue _fun58799 }
 564:
            report = oscar.startsWith;
            zulu = _closure1_slot12;
            zulu = zulu.ME;
            zulu = report.bind(oscar)(zulu);
            mike = 'private_channel';
            if(zulu) { _fun58799_ip = 799; continue _fun58799 }
 597:
            report = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 17;
            zulu = options[zulu];
            report = report.bind(golf)(zulu);
            zulu = report.tryParseChannelPath;
            zulu = zulu.bind(report)(oscar);
            report = entity != zulu;
            mike = 'other';
            if(!report) { _fun58799_ip = 799; continue _fun58799 }
 642:
            report = zulu.channelId;
            report = entity != report;
            mike = 'channel-list';
            if(!report) { _fun58799_ip = 799; continue _fun58799 }
 663:
            golf = _closure1_slot14;
            oscar = golf.has;
            report = zulu.channelId;
            report = oscar.bind(golf)(report);
            if(report) { _fun58799_ip = 794; continue _fun58799 }
 685:
            oscar = _closure1_slot9;
            report = oscar.getChannel;
            tango = zulu.channelId;
            options = report.bind(oscar)(tango);
            report = entity != options;
            tango = 'unknown-channel';
            if(!report) { _fun58799_ip = 789; continue _fun58799 }
 717:
            report = options.isGuildVocal;
            oscar = report.bind(options)();
            report = 'guild-voice';
            if(oscar) { _fun58799_ip = 786; continue _fun58799 }
 736:
            oscar = options.isForumLikeChannel;
            golf = oscar.bind(options)();
            oscar = 'guild-forum';
            if(golf) { _fun58799_ip = 783; continue _fun58799 }
 755:
            golf = options.isDirectory;
            options = golf.bind(options)();
            golf = 'guild-text';
            if(!options) { _fun58799_ip = 780; continue _fun58799 }
 774:
            golf = 'guild-directory';
 780:
            oscar = golf;
 783:
            report = oscar;
 786:
            tango = report;
 789:
            mike = tango;
            _fun58799_ip = 799; continue _fun58799;
 794:
            mike = zulu.channelId;
 799:
            return mike;
 801:
            mike = 'invite';
            return mike;
 807:
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar) { // Original name: sharedProperties
        _fun58800: for(var _fun58800_ip = 0; ; ) switch(_fun58800_ip) {
 0:
            entity = _closure1_slot4;
            entity = entity.TTIManager;
            tango = entity.AppOpenedTimestamp;
            entity = {};
            mike = _closure1_slot16;
            entity['load_id'] = mike;
            mike = global;
            report = mike.Date;
            mike = report.now;
            mike = mike.bind(report)();
            mike = mike - tango;
            entity['duration_ms_since_app_opened'] = mike;
            mike = argFoo;
            entity['screen_name'] = mike;
            mike = argBar;
            entity['has_cached_data'] = mike;
            mike = _closure1_slot17;
            tango = mike.length;
            mike = 0;
            tango = tango > mike;
            mike = null;
            if(!tango) { _fun58800_ip = 102; continue _fun58800 }
 98:
            mike = _closure1_slot17;
 102:
            entity['manifest'] = mike;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _logLegacyAppUiViewed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge) {
            entity = function* (argFoo, argBar, argBaz, argCorge) { // Original name: ?anon_0_
                _fun58803: for(var _fun58803_ip = 0; ; ) switch(_fun58803_ip) {
 0:
                    StartGenerator();
                    offset = argCorge;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun58803_ip = 368; continue _fun58803 }
 13:
                    oscar = _closure1_slot26;
                    zulu = undefined;
                    report = argFoo;
                    mike = argBaz;
                    romeo = oscar.bind(zulu)(report, mike);
                    mike = _closure1_slot4;
                    report = mike.TTIManager;
                    mike = report.getJSBundleTimestamps;
                    mike = mike.bind(report)();
                    SaveGenerator(address=60);
 58:
                    return mike;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun58803_ip = 365; continue _fun58803 }
 69:
                    yankee = mike.JSBundleLoadedTimestamp;
                    verify = mike.JSBundleParsedTimestamp;
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 19;
                    options = golf[report];
                    backup = oscar.bind(zulu)(options);
                    foxtrot = backup.markAt;
                    kilo = '🏃';
                    options = 'JS Bundle Loaded';
                    options = foxtrot.bind(backup)(kilo, options, yankee);
                    options = golf[report];
                    backup = oscar.bind(zulu)(options);
                    foxtrot = backup.mark;
                    options = 'app_ui_viewed logged';
                    options = foxtrot.bind(backup)(kilo, options);
                    options = golf[report];
                    kilo = oscar.bind(zulu)(options);
                    backup = kilo.addDetail;
                    options = offset - verify;
                    foxtrot = options - 0;
                    options = 'Since Bundle Parsed';
                    options = backup.bind(kilo)(options, foxtrot);
                    report = golf[report];
                    options = oscar.bind(zulu)(report);
                    report = global;
                    foxtrot = report.Date;
                    report = foxtrot.now;
                    foxtrot = report.bind(foxtrot)();
                    report = 20000;
                    report = foxtrot + report;
                    options['endTime'] = report;
                    report = 21;
                    report = golf[report];
                    options = oscar.bind(zulu)(report);
                    golf = options.track;
                    report = _closure1_slot11;
                    oscar = report.APP_UI_VIEWED;
                    report = {};
                    result = report;
                    output = romeo;
                    romeo = copyDataProperties(result, output);
                    romeo = _closure1_slot24;
                    output = romeo.bind(zulu)();
                    result = report;
                    romeo = copyDataProperties(result, output);
                    romeo = offset - yankee;
                    yankee = 'duration_ms_since_required_js_bundle_loaded';
                    report[yankee] = romeo;
                    offset = offset - verify;
                    verify = 'duration_ms_since_required_js_bundle_parsed';
                    report[verify] = offset;
                    tango = _closure1_slot7;
                    verify = tango.theme;
                    tango = 'theme';
                    report[tango] = verify;
                    output = argBar;
                    result = report;
                    tango = copyDataProperties(result, output);
                    tango = {};
                    verify = true;
                    tango['logEventProperties'] = verify;
                    tango = golf.bind(options)(oscar, report, tango);
                    return zulu;
 365:
                    return mike;
 368:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: trackAppUIViewed2
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _trackAppUIViewed
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun58807: for(var _fun58807_ip = 0; ; ) switch(_fun58807_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun58807_ip = 389; continue _fun58807 }
 12:
                    zulu = undefined;
                    var _closure4_slot0 = zulu;
                    mike = _closure1_slot25;
                    mike = mike.bind(zulu)();
                    options = null;
                    report = options != mike;
                    oscar = 'unknown';
                    if(!report) { _fun58807_ip = 45; continue _fun58807 }
 42:
                    oscar = mike;
 45:
                    mike = _closure1_slot4;
                    mike = mike.TTIManager;
                    report = mike.AppOpenedTimestamp;
                    _closure4_slot0 = report;
                    mike = _closure1_slot4;
                    mike = mike.TTIManager;
                    mike = mike.getAllNativeTimestamps;
                    verify = options == mike;
                    mike = undefined;
                    if(verify) { _fun58807_ip = 134; continue _fun58807 }
 90:
                    verify = _closure1_slot4;
                    offset = verify.TTIManager;
                    verify = offset.getAllNativeTimestamps;
                    offset = verify.bind(offset)();
                    options = options == offset;
                    mike = undefined;
                    if(options) { _fun58807_ip = 134; continue _fun58807 }
 119:
                    verify = offset.then;
                    options = function(argFoo) {
                        report = argFoo;
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        entity = 19;
                        mike = tango[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        oscar = mike.logGroups;
                        mike = 0;
                        mike = oscar[mike];
                        mike['nativeLogs'] = report;
                        mike = 24;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.processNativeLogs;
                        mike = _closure4_slot0;
                        mike = zulu.bind(tango)(report, mike);
                        return entity;
                    };
                    mike = verify.bind(offset)(options);
 134:
                    SaveGenerator(address=138);
 136:
                    return mike;
 138:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(options) { _fun58807_ip = 386; continue _fun58807 }
 147:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    options = 19;
                    options = backup[options];
                    yankee = foxtrot.bind(zulu)(options);
                    offset = yankee.mark;
                    verify = '❗';
                    options = 'Track app_ui_viewed2';
                    options = offset.bind(yankee)(verify, options);
                    options = 21;
                    options = backup[options];
                    romeo = foxtrot.bind(zulu)(options);
                    yankee = romeo.track;
                    options = _closure1_slot11;
                    offset = options.APP_UI_VIEWED2;
                    verify = {};
                    options = _closure1_slot24;
                    sizing = options.bind(zulu)();
                    output = verify;
                    options = copyDataProperties(output, sizing);
                    options = 24;
                    options = backup[options];
                    foxtrot = foxtrot.bind(zulu)(options);
                    options = foxtrot.serializeTTITracker;
                    sizing = options.bind(foxtrot)(report);
                    output = verify;
                    options = copyDataProperties(output, sizing);
                    foxtrot = _closure1_slot16;
                    options = 'load_id';
                    verify[options] = foxtrot;
                    options = 'screen_name';
                    verify[options] = oscar;
                    foxtrot = _closure1_slot5;
                    options = foxtrot.hasCache;
                    foxtrot = options.bind(foxtrot)();
                    options = 'has_cached_data';
                    verify[options] = foxtrot;
                    options = _closure1_slot7;
                    foxtrot = options.theme;
                    options = 'theme';
                    verify[options] = foxtrot;
                    options = {};
                    foxtrot = true;
                    options['logEventProperties'] = foxtrot;
                    options = yankee.bind(romeo)(offset, verify, options);
                    golf = _closure1_slot4;
                    options = golf.TTIManager;
                    golf = options.runningTTIAutomation;
                    golf = golf.bind(options)();
                    if(!golf) { _fun58807_ip = 383; continue _fun58807 }
 372:
                    tango = function(argFoo, argBar) { // Original name: logToDevice
                        golf = {};
                        zulu = _closure1_slot24;
                        entity = undefined;
                        offset = zulu.bind(entity)();
                        yankee = golf;
                        zulu = copyDataProperties(yankee, offset);
                        report = _closure1_slot1;
                        oscar = _closure1_slot2;
                        zulu = 24;
                        zulu = oscar[zulu];
                        oscar = report.bind(entity)(zulu);
                        report = oscar.serializeTTITracker;
                        zulu = argFoo;
                        offset = report.bind(oscar)(zulu);
                        yankee = golf;
                        zulu = copyDataProperties(yankee, offset);
                        report = _closure1_slot16;
                        zulu = 'load_id';
                        golf[zulu] = report;
                        report = argBar;
                        zulu = 'screen_name';
                        golf[zulu] = report;
                        report = _closure1_slot5;
                        zulu = report.hasCache;
                        report = zulu.bind(report)();
                        zulu = 'has_cached_data';
                        golf[zulu] = report;
                        zulu = _closure1_slot7;
                        report = zulu.theme;
                        zulu = 'theme';
                        golf[zulu] = report;
                        zulu = global;
                        oscar = zulu.Date;
                        report = oscar.now;
                        oscar = report.bind(oscar)();
                        report = 'logged_at';
                        golf[report] = oscar;
                        oscar = _closure1_slot8;
                        report = oscar.getId;
                        oscar = report.bind(oscar)();
                        report = 'user_id';
                        golf[report] = oscar;
                        oscar = zulu.Date;
                        report = oscar.now;
                        report = report.bind(oscar)();
                        var _closure5_slot0 = report;
                        oscar = _closure1_slot30;
                        verify = oscar.bind(entity)(golf);
                        options = verify.forEach;
                        golf = function(argFoo) {
                            entity = _closure1_slot4;
                            zulu = entity.TTIManager;
                            mike = zulu.logToDevice;
                            entity = global;
                            report = entity.JSON;
                            tango = report.stringify;
                            entity = {};
                            options = argFoo;
                            verify = entity;
                            oscar = copyDataProperties(verify, options);
                            golf = 'app_ui_viewed';
                            oscar = 'type';
                            entity[oscar] = golf;
                            golf = _closure5_slot0;
                            oscar = 'batch_id';
                            entity[oscar] = golf;
                            entity = tango.bind(report)(entity);
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        golf = options.bind(verify)(golf);
                        report = report + 1;
                        _closure5_slot0 = report;
                        golf = _closure1_slot6;
                        report = golf.getAllExperimentAssignments;
                        report = report.bind(golf)();
                        oscar = oscar.bind(entity)(report);
                        report = oscar.forEach;
                        tango = function(argFoo) {
                            entity = _closure1_slot4;
                            zulu = entity.TTIManager;
                            mike = zulu.logToDevice;
                            entity = global;
                            report = entity.JSON;
                            tango = report.stringify;
                            entity = {};
                            options = argFoo;
                            verify = entity;
                            oscar = copyDataProperties(verify, options);
                            golf = _closure5_slot0;
                            oscar = 'batch_id';
                            entity[oscar] = golf;
                            golf = 'experiments';
                            oscar = 'type';
                            entity[oscar] = golf;
                            entity = tango.bind(report)(entity);
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        tango = report.bind(oscar)(tango);
                        tango = _closure1_slot4;
                        report = tango.TTIManager;
                        tango = report.logToDevice;
                        golf = zulu.JSON;
                        oscar = golf.stringify;
                        zulu = {};
                        options = 'finished';
                        zulu['type'] = options;
                        zulu = oscar.bind(golf)(zulu);
                        zulu = tango.bind(report)(zulu);
                        mike = _closure1_slot4;
                        zulu = mike.TTIManager;
                        mike = zulu.trackTTILogged;
                        mike = mike.bind(zulu)();
                        return entity;
                    };
                    tango = tango.bind(zulu)(report, oscar);
 383:
                    return zulu;
 386:
                    return mike;
 389:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: batchKeys
        _fun58812: for(var _fun58812_ip = 0; ; ) switch(_fun58812_ip) {
 0:
            options = argFoo;
            entity = global;
            mike = entity.Object;
            entity = mike.keys;
            golf = entity.bind(mike)(options);
            entity = new Array(0);
            mike = golf.length;
            oscar = 0;
            mike = oscar < mike;
            tango = 10;
            zulu = undefined;
            if(!mike) { _fun58812_ip = 135; continue _fun58812 }
 47:
            offset = {};
            yankee = _closure1_slot22;
            mike = golf.slice;
            verify = oscar + tango;
            mike = mike.bind(golf)(oscar, verify);
            romeo = yankee.bind(zulu)(mike);
            yankee = romeo.bind(zulu)();
            mike = yankee.done;
            if(mike) { _fun58812_ip = 113; continue _fun58812 }
 85:
            foxtrot = yankee.value;
            mike = options[foxtrot];
            offset[foxtrot] = mike;
            foxtrot = romeo.bind(zulu)();
            mike = foxtrot.done;
            yankee = foxtrot;
            if(!mike) { _fun58812_ip = 85; continue _fun58812 }
 113:
            mike = entity.push;
            mike = mike.bind(entity)(offset);
            mike = golf.length;
            oscar = verify;
            if(oscar < mike) { _fun58812_ip = 47; continue _fun58812 }
 135:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.NativeModules;
    var _closure1_slot4 = options;
    options = 2;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot8 = options;
    options = 6;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot9 = options;
    options = 7;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot10 = options;
    options = 8;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.AnalyticEvents;
    var _closure1_slot11 = verify;
    options = options.Routes;
    var _closure1_slot12 = options;
    options = 9;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.ACCEPT_INVITE_MODAL_KEY;
    var _closure1_slot13 = options;
    options = 10;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.StaticChannelRoutes;
    var _closure1_slot14 = options;
    options = null;
    var _closure1_slot15 = options;
    options = 13;
    options = golf[options];
    verify = oscar.bind(entity)(options);
    options = verify.v4;
    options = options.bind(verify)();
    var _closure1_slot16 = options;
    options = 14;
    verify = golf[options];
    options = argCorge;
    verify = options.bind(entity)(verify);
    options = verify.getConstants;
    options = options.bind(verify)();
    options = options.Manifest;
    var _closure1_slot17 = options;
    options = false;
    var _closure1_slot18 = options;
    var _closure1_slot19 = options;
    offset = report.Set;
    options = offset.prototype;
    verify = Object.create(options, {constructor: {value: offset}});
    backup = ['private_channel', 'guild-forum', 'guild-directory', 'guild-text', 'thread', 'redesign-guilds', 'redesign-messages'];
    kilo = verify;
    options = new kilo[offset](backup, foxtrot);
    options = options instanceof Object ? options : verify;
    var _closure1_slot20 = options;
    verify = report.Set;
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    backup = ['friends_list', 'guild-voice', 'redesign-guild-voice', 'unknown-channel', 'redesign-unknown-channel', 'channel-list', 'other'];
    kilo = options;
    report = new kilo[verify](backup, foxtrot);
    report = report instanceof Object ? report : options;
    var _closure1_slot21 = report;
    report = 25;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/tti_analytics/native/TTIAnalyticsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['getDeviceMetadata'] = tango;
    tango = function() { // Original name: currentLoadId
        entity = _closure1_slot16;
        return entity;
    };
    zulu['currentLoadId'] = tango;
    tango = function(argFoo) { // Original name: trackAppOpened
        options = argFoo;
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 19;
        zulu = report[entity];
        entity = undefined;
        verify = tango.bind(entity)(zulu);
        golf = verify.mark;
        oscar = '🏃';
        zulu = 'Track app_opened';
        zulu = golf.bind(verify)(oscar, zulu);
        zulu = 20;
        zulu = report[zulu];
        golf = tango.bind(entity)(zulu);
        oscar = golf.addBreadcrumb;
        zulu = {'category': 'lifecycle', 'message': 'App opened'};
        verify = {};
        verify['openFrom'] = options;
        zulu['data'] = verify;
        zulu = oscar.bind(golf)(zulu);
        zulu = 21;
        zulu = report[zulu];
        oscar = tango.bind(entity)(zulu);
        report = oscar.track;
        zulu = _closure1_slot11;
        tango = zulu.APP_OPENED;
        zulu = {};
        golf = _closure1_slot24;
        romeo = golf.bind(entity)();
        foxtrot = zulu;
        golf = copyDataProperties(foxtrot, romeo);
        golf = 'opened_from';
        zulu[golf] = options;
        options = _closure1_slot16;
        golf = 'load_id';
        zulu[golf] = options;
        mike = _closure1_slot7;
        golf = mike.theme;
        mike = 'theme';
        zulu[mike] = golf;
        mike = {};
        golf = true;
        mike['logEventProperties'] = golf;
        mike = report.bind(oscar)(tango, zulu, mike);
        return entity;
    };
    zulu['trackAppOpened'] = tango;
    tango = function() { // Original name: trackAppUIViewed
        _fun58815: for(var _fun58815_ip = 0; ; ) switch(_fun58815_ip) {
 0:
            report = arguments[0];
            tango = arguments[1];
            zulu = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun58815_ip = 28; continue _fun58815 }
 17:
            oscar = _closure1_slot25;
            report = oscar.bind(entity)();
 28:
            var _closure2_slot0 = report;
            if(!(tango === entity)) { _fun58815_ip = 38; continue _fun58815 }
 36:
            tango = {};
 38:
            var _closure2_slot1 = tango;
            if(!(zulu === entity)) { _fun58815_ip = 63; continue _fun58815 }
 46:
            report = _closure1_slot5;
            tango = report.hasCache;
            zulu = tango.bind(report)();
 63:
            var _closure2_slot2 = zulu;
            var _closure2_slot3 = entity;
            tango = _closure1_slot18;
            if(tango) { _fun58815_ip = 295; continue _fun58815 }
 84:
            tango = true;
            _closure1_slot18 = tango;
            tango = _closure1_slot4;
            tango = tango.TTIManager;
            yankee = tango.AppOpenedTimestamp;
            tango = global;
            oscar = tango.Date;
            report = oscar.now;
            report = report.bind(oscar)();
            _closure2_slot3 = report;
            golf = report - yankee;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 19;
            verify = options[report];
            foxtrot = oscar.bind(entity)(verify);
            romeo = foxtrot.mark;
            offset = '❗';
            verify = 'Track app_ui_viewed';
            verify = romeo.bind(foxtrot)(offset, verify);
            verify = options[report];
            romeo = oscar.bind(entity)(verify);
            offset = romeo.addDetail;
            verify = 'TTI';
            verify = offset.bind(romeo)(verify, golf);
            report = options[report];
            offset = oscar.bind(entity)(report);
            verify = offset.markAt;
            oscar = '🏃';
            report = 'app_opened';
            report = verify.bind(offset)(oscar, report, yankee);
            oscar = _closure1_slot0;
            report = 22;
            report = options[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.ttiRecorded;
            report = report.bind(oscar)(golf);
            tango = tango.setTimeout;
            zulu = _closure1_slot3;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun58817: for(var _fun58817_ip = 0; ; ) switch(_fun58817_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun58817_ip = 88; continue _fun58817 }
 9:
                        report = _closure2_slot0;
                        zulu = null;
                        zulu = zulu != report;
                        options = 'unknownn';
                        if(!zulu) { _fun58817_ip = 35; continue _fun58817 }
 31:
                        options = _closure2_slot0;
 35:
                        yankee = _closure2_slot1;
                        offset = _closure2_slot2;
                        verify = _closure2_slot3;
                        mike = function() { // Original name: logLegacyAppUiViewed
                            entity = undefined;
                            tango = _closure1_slot27;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        zulu = undefined;
                        foxtrot = undefined;
                        romeo = options;
                        mike = foxtrot[mike](romeo, yankee, offset, verify, options);
                        SaveGenerator(address=67);
 65:
                        return mike;
 67:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun58817_ip = 85; continue _fun58817 }
 73:
                        tango = function() { // Original name: scheduleTrackAppUiViewed2
                            entity = global;
                            golf = entity.setTimeout;
                            oscar = _closure1_slot28;
                            tango = _closure1_slot1;
                            report = _closure1_slot2;
                            entity = 23;
                            zulu = report[entity];
                            entity = undefined;
                            zulu = tango.bind(entity)(zulu);
                            zulu = zulu.Millis;
                            options = zulu.SECOND;
                            zulu = 15;
                            zulu = zulu * options;
                            zulu = golf.bind(entity)(oscar, zulu);
                            var _closure5_slot0 = zulu;
                            zulu = 24;
                            zulu = report[zulu];
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.setTTICallback;
                            mike = function() {
                                _fun58820: for(var _fun58820_ip = 0; ; ) switch(_fun58820_ip) {
 0:
                                    entity = _closure1_slot25;
                                    report = undefined;
                                    oscar = entity.bind(report)();
                                    golf = null;
                                    entity = golf == oscar;
                                    zulu = false;
                                    if(entity) { _fun58820_ip = 227; continue _fun58820 }
 27:
                                    options = _closure1_slot21;
                                    entity = options.has;
                                    entity = entity.bind(options)(oscar);
                                    if(!entity) { _fun58820_ip = 88; continue _fun58820 }
 44:
                                    options = _closure1_slot1;
                                    verify = _closure1_slot2;
                                    entity = 24;
                                    entity = verify[entity];
                                    entity = options.bind(report)(entity);
                                    options = entity.readySupplemental;
                                    entity = options.hasData;
                                    entity = entity.bind(options)();
                                    zulu = false;
                                    if(!entity) { _fun58820_ip = 227; continue _fun58820 }
 88:
                                    tango = _closure1_slot20;
                                    entity = tango.has;
                                    entity = entity.bind(tango)(oscar);
                                    zulu = true;
                                    if(!entity) { _fun58820_ip = 227; continue _fun58820 }
 107:
                                    tango = _closure1_slot1;
                                    entity = _closure1_slot2;
                                    verify = 24;
                                    entity = entity[verify];
                                    entity = tango.bind(report)(entity);
                                    tango = entity.readySupplemental;
                                    entity = tango.hasData;
                                    entity = entity.bind(tango)();
                                    tango = !entity;
                                    entity = !tango;
                                    if(tango) { _fun58820_ip = 224; continue _fun58820 }
 152:
                                    oscar = _closure1_slot1;
                                    tango = _closure1_slot2;
                                    tango = tango[verify];
                                    tango = oscar.bind(report)(tango);
                                    oscar = tango.renderLatestMessages;
                                    tango = oscar.hasData;
                                    tango = tango.bind(oscar)();
                                    oscar = !tango;
                                    tango = !oscar;
                                    if(!oscar) { _fun58820_ip = 221; continue _fun58820 }
 194:
                                    options = _closure1_slot1;
                                    oscar = _closure1_slot2;
                                    oscar = oscar[verify];
                                    oscar = options.bind(report)(oscar);
                                    oscar = oscar.interstitial;
                                    tango = golf != oscar;
 221:
                                    entity = tango;
 224:
                                    zulu = entity;
 227:
                                    entity = !zulu;
                                    entity = !entity;
                                    if(!zulu) { _fun58820_ip = 280; continue _fun58820 }
 236:
                                    zulu = global;
                                    oscar = zulu.clearTimeout;
                                    tango = _closure5_slot0;
                                    tango = oscar.bind(report)(tango);
                                    tango = zulu.setTimeout;
                                    zulu = _closure1_slot28;
                                    mike = 500;
                                    mike = tango.bind(report)(zulu, mike);
                                    entity = true;
 280:
                                    return entity;
                                }
                            };
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        };
                        tango = tango.bind(zulu)();
                        return zulu;
 85:
                        return mike;
 88:
                        return entity;
                    }
                };
                return entity;
            };
            zulu = zulu.bind(entity)(mike);
            mike = 1000;
            mike = tango.bind(entity)(zulu, mike);
 295:
            return entity;
        }
    };
    zulu['trackAppUIViewed'] = tango;
    mike = function() { // Original name: trackAppLaunchCompleted
        _fun58821: for(var _fun58821_ip = 0; ; ) switch(_fun58821_ip) {
 0:
            verify = arguments[0];
            report = arguments[1];
            entity = undefined;
            if(!(verify === entity)) { _fun58821_ip = 23; continue _fun58821 }
 12:
            mike = _closure1_slot25;
            verify = mike.bind(entity)();
 23:
            if(!(report === entity)) { _fun58821_ip = 44; continue _fun58821 }
 27:
            zulu = _closure1_slot5;
            mike = zulu.hasCache;
            report = mike.bind(zulu)();
 44:
            mike = _closure1_slot19;
            if(mike) { _fun58821_ip = 171; continue _fun58821 }
 54:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 19;
            mike = oscar[mike];
            offset = tango.bind(entity)(mike);
            options = offset.mark;
            golf = '🏃';
            mike = 'Track app_launch';
            mike = options.bind(offset)(golf, mike);
            mike = 21;
            mike = oscar[mike];
            options = tango.bind(entity)(mike);
            golf = options.track;
            mike = _closure1_slot11;
            oscar = mike.APP_LAUNCH_COMPLETED;
            tango = _closure1_slot26;
            mike = null;
            offset = mike != verify;
            mike = 'unknown';
            if(!offset) { _fun58821_ip = 145; continue _fun58821 }
 142:
            mike = verify;
 145:
            report = tango.bind(entity)(mike, report);
            tango = {};
            mike = true;
            tango['logEventProperties'] = mike;
            tango = golf.bind(options)(oscar, report, tango);
            _closure1_slot19 = mike;
 171:
            return entity;
        }
    };
    zulu['trackAppLaunchCompleted'] = mike;
    return entity;
})();