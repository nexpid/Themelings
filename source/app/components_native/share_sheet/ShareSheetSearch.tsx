// app/components_native/share_sheet/ShareSheetSearch.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: extractDomain
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = undefined;
            zuuluu = undefined;
 7: // try_start_0
            tangon = global;
            report = tangon.URL;
            oscard = michal;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            michal = new golfie[report](oscard, report);
            michal = michal instanceof Object ? michal : tangon;
            report = michal.hostname;
            zuuluu = report;
            tangon = report.startsWith;
            michal = 'www.';
            michal = tangon.bind(report)(michal);
            report = zuuluu;
            if(michal) { _fun00002_ip = 75; continue _fun00001 }
 70:
            michal = report;
            _fun00002_ip = 88; continue _fun00001;
 75:
            tangon = report.slice;
            zuuluu = 4;
            michal = tangon.bind(report)(zuuluu);
 88: // try_end0
            return michal;
 90: // catch_target0
            CatchBlockStart(arg_register=1);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ShareSheetSendButton
        entity = argFoo;
        report = entity.onPress;
        tangon = _closure1_slot17;
        option = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 14;
        entity = verify[entity];
        zuuluu = undefined;
        entity = option.bind(zuuluu)(entity);
        michal = entity.HeaderActionButton;
        entity = {};
        golfie = _closure1_slot1;
        oscard = 15;
        oscard = verify[oscard];
        oscard = golfie.bind(zuuluu)(oscard);
        entity['source'] = oscard;
        entity['onPress'] = report;
        report = 16;
        oscard = verify[report];
        oscard = option.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.TXNS7e;
        report = oscard.bind(golfie)(report);
        entity['accessibilityLabel'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot21 = entity;
    michal = function(argFoo, argBar) { // Original name: renderSearchResult
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            michal = argBar;
            var _closure2_slot1 = michal;
            oscard = entity.type;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            verify = 17;
            zuuluu = zuuluu[verify];
            report = undefined;
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.HEADER;
            if(!(oscard !== zuuluu)) { _fun00004_ip = 393; continue _fun00003 }
 65:
            zuuluu = {};
            oscard = entity.record;
            oscard = oscard.id;
            zuuluu['key'] = oscard;
            tangon = function() { // Original name: onPress
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot15;
                zuuluu = michal.SHARE_SHEET_ACTION;
                michal = {};
                oscard = 'recipient_selected';
                michal['action'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu['onPress'] = tangon;
            golfie = zuuluu.key;
            option = zuuluu.onPress;
            tangon = entity.type;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.USER;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 338; continue _fun00003 }
 144:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 276; continue _fun00003 }
 177:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.TEXT_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 276; continue _fun00003 }
 210:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.VOICE_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 276; continue _fun00003 }
 243:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 19;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.assertNever;
            zuuluu = zuuluu.bind(tangon)(entity);
            return report;
 276:
            oscard = _closure1_slot17;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 18;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.ConnectedTextChannel;
            zuuluu = {};
            verify = false;
            zuuluu['showUnread'] = verify;
            zuuluu['onPress'] = option;
            verify = entity.record;
            zuuluu['channel'] = verify;
            zuuluu = oscard.bind(report)(tangon, zuuluu, golfie);
            return zuuluu;
 338:
            oscard = _closure1_slot17;
            tangon = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 18;
            zuuluu = verify[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.ConnectedUser;
            zuuluu = {};
            zuuluu['onPress'] = option;
            option = entity.record;
            zuuluu['user'] = option;
            zuuluu = oscard.bind(report)(tangon, zuuluu, golfie);
            return zuuluu;
 393:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 20;
            michal = oscard[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.FormTitle;
            michal = {};
            oscard = entity.record;
            oscard = oscard.text;
            michal['title'] = oscard;
            entity = entity.record;
            entity = entity.id;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot22 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    foxtra = 0;
    report = golfie[foxtra];
    entity = undefined;
    report = romeon.bind(entity)(report);
    var _closure1_slot3 = report;
    backup = 1;
    report = golfie[backup];
    report = romeon.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.View;
    var _closure1_slot6 = option;
    option = report.NativeModules;
    var _closure1_slot7 = option;
    report = report.ScrollView;
    var _closure1_slot8 = report;
    report = 4;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 5;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 7;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 8;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 9;
    report = golfie[report];
    report = romeon.bind(entity)(report);
    var _closure1_slot14 = report;
    report = 10;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AnalyticEvents;
    var _closure1_slot15 = option;
    report = report.NOOP;
    var _closure1_slot16 = report;
    report = 11;
    option = golfie[report];
    option = oscard.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot17 = option;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot18 = report;
    report = 12;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {};
    yankee = 13;
    kiloes = golfie[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_SECONDARY;
    offset['backgroundColor'] = kiloes;
    offset['flex'] = backup;
    report['container'] = offset;
    offset = {};
    offset['flex'] = backup;
    report['keyboardAwareView'] = offset;
    offset = {};
    offset['flex'] = backup;
    report['innerView'] = offset;
    offset = {};
    offset['marginTop'] = foxtra;
    report['formSection'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_MUTED;
    offset['color'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtra;
    report['commentColors'] = offset;
    offset = {};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.TEXT_MUTED;
    offset['color'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = foxtra;
    report['searchColors'] = offset;
    offset = {'backgroundColor': null, 'paddingVertical': 4, 'borderRadius': null, 'flexDirection': 'row', 'alignItems': 'center', 'marginRight': 16, 'marginLeft': 16};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtra;
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.xs;
    offset['borderRadius'] = foxtra;
    report['selectedResultContainer'] = offset;
    offset = {'backgroundColor': null, 'flex': 1, 'flexShrink': 1};
    foxtra = golfie[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_FLOATING;
    offset['backgroundColor'] = foxtra;
    report['selectedResult'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_FLOATING;
    offset['backgroundColor'] = yankee;
    report['selectedResultCancelIcon'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot19 = report;
    report = 43;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'components_native/share_sheet/ShareSheetSearch.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ShareSheetSearch
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            option = entity.attachments;
            var _closure2_slot0 = option;
            michal = entity.text;
            var _closure2_slot1 = michal;
            source = entity.targetChannelId;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot13 = tangon;
            entity = function() { // Original name: _onSharePress
                tangon = undefined;
                entity = undefined;
                zuuluu = _closure1_slot3;
                michal = function* () {
                    entity = function* () { // Original name: ?anon_0_
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(michal) { _fun00008_ip = 683; continue _fun00007 }
 12:
                            zuuluu = _closure2_slot13;
                            michal = null;
                            report = michal == zuuluu;
                            zuuluu = undefined;
                            tangon = undefined;
                            if(report) { _fun00008_ip = 42; continue _fun00007 }
 32:
                            report = _closure2_slot13;
                            tangon = report.record;
 42:
                            if(!(michal == tangon)) { _fun00008_ip = 132; continue _fun00007 }
 46:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            tangon = 30;
                            tangon = romeon[tangon];
                            option = yankee.bind(zuuluu)(tangon);
                            report = option.showInformationToast;
                            tangon = 16;
                            verify = romeon[tangon];
                            verify = yankee.bind(zuuluu)(verify);
                            offset = verify.intl;
                            verify = offset.string;
                            tangon = romeon[tangon];
                            tangon = yankee.bind(zuuluu)(tangon);
                            tangon = tangon.t;
                            tangon = tangon.zFuCsL;
                            tangon = verify.bind(offset)(tangon);
                            tangon = report.bind(option)(tangon);
                            _fun00008_ip = 677; continue _fun00007;
 132:
                            tangon = _closure2_slot13;
                            option = tangon.type;
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            report = 17;
                            report = offset[report];
                            report = verify.bind(zuuluu)(report);
                            report = report.AutocompleterResultTypes;
                            report = report.USER;
                            verify = _closure2_slot13;
                            verify = verify.record;
                            offset = verify.id;
                            verify = offset;
                            if(!(option === report)) { _fun00008_ip = 213; continue _fun00007 }
 198:
                            option = _closure1_slot11;
                            report = option.getDMFromUserId;
                            verify = report.bind(option)(offset);
 213:
                            option = _closure1_slot11;
                            report = option.getChannel;
                            report = report.bind(option)(verify);
                            if(!(michal == report)) { _fun00008_ip = 314; continue _fun00007 }
 231:
                            romeon = _closure1_slot0;
                            foxtra = _closure1_slot2;
                            michal = 30;
                            michal = foxtra[michal];
                            verify = romeon.bind(zuuluu)(michal);
                            option = verify.showInformationToast;
                            michal = 16;
                            offset = foxtra[michal];
                            offset = romeon.bind(zuuluu)(offset);
                            yankee = offset.intl;
                            offset = yankee.string;
                            michal = foxtra[michal];
                            michal = romeon.bind(zuuluu)(michal);
                            michal = michal.t;
                            michal = michal.zFuCsL;
                            michal = offset.bind(yankee)(michal);
                            michal = option.bind(verify)(michal);
                            _fun00008_ip = 677; continue _fun00007;
 314:
                            michal = global;
                            verify = michal.Promise;
                            option = verify.all;
                            yankee = _closure2_slot0;
                            offset = yankee.map;
                            michal = function() {
                                tangon = _closure1_slot3;
                                zuuluu = undefined;
                                michal = function* (argFoo) {
                                    entity = function* (argFoo) { // Original name: ?anon_0_
                                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                            StartGenerator();
                                            report = argFoo;
                                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                            if(michal) { _fun00010_ip = 101; continue _fun00009 }
 10:
                                            tangon = _closure1_slot0;
                                            zuuluu = _closure1_slot2;
                                            michal = 31;
                                            michal = zuuluu[michal];
                                            zuuluu = undefined;
                                            option = tangon.bind(zuuluu)(michal);
                                            golfie = option.getImageDimensionsIfMissing;
                                            oscard = report.uri;
                                            tangon = report.width;
                                            michal = report.height;
                                            michal = golfie.bind(option)(oscard, tangon, michal);
                                            SaveGenerator(address=67);
 65:
                                            return michal;
 67:
                                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                            if(tangon) { _fun00010_ip = 98; continue _fun00009 }
 73:
                                            oscard = michal.width;
                                            tangon = michal.height;
                                            report['width'] = oscard;
                                            report['height'] = tangon;
                                            return zuuluu;
 98:
                                            return michal;
 101:
                                            return entity;
                                        }
                                    };
                                    return entity;
                                };
                                michal = tangon.bind(zuuluu)(michal);
                                var _closure6_slot0 = michal;
                                entity = function(argFoo) {
                                    entity = undefined;
                                    tangon = _closure6_slot0;
                                    zuuluu = tangon.apply;
                                    entity = arguments;
                                    michal = entity;
                                    entity = this;
                                    entity = zuuluu.bind(tangon)(entity, michal);
                                    return entity;
                                };
                                return entity;
                            };
                            michal = michal.bind(zuuluu)();
                            michal = offset.bind(yankee)(michal);
                            michal = option.bind(verify)(michal);
                            SaveGenerator(address=362);
 360:
                            return michal;
 362:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                            if(option) { _fun00008_ip = 680; continue _fun00007 }
 371:
                            verify = _closure1_slot0;
                            offset = _closure1_slot2;
                            option = 30;
                            option = offset[option];
                            offset = verify.bind(zuuluu)(option);
                            verify = offset.sendAttachments;
                            option = {};
                            yankee = _closure2_slot3;
                            option['attachments'] = yankee;
                            option['channel'] = report;
                            yankee = _closure2_slot5;
                            option['comment'] = yankee;
                            option = verify.bind(offset)(option);
                            if(!option) { _fun00008_ip = 677; continue _fun00007 }
 432:
                            option = report.getGuildId;
                            offset = option.bind(report)();
                            romeon = {};
                            romeon['guild_id'] = offset;
                            option = report.id;
                            romeon['channel_id'] = option;
                            option = report.type;
                            romeon['channel_type'] = option;
                            option = _closure2_slot3;
                            option = option.length;
                            romeon['num_attachments'] = option;
                            verify = _closure2_slot3;
                            option = verify.map;
                            golfie = function(argFoo) {
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    entity = argFoo;
                                    michal = entity.mimeType;
                                    entity = null;
                                    zuuluu = entity != michal;
                                    entity = 'unknown';
                                    if(!zuuluu) { _fun00012_ip = 25; continue _fun00011 }
 22:
                                    entity = michal;
 25:
                                    return entity;
                                }
                            };
                            golfie = option.bind(verify)(golfie);
                            romeon['attachment_mimetypes'] = golfie;
                            option = _closure2_slot5;
                            golfie = '';
                            golfie = golfie !== option;
                            romeon['has_comment'] = golfie;
                            golfie = _closure1_slot20;
                            oscard = _closure2_slot5;
                            oscard = golfie.bind(zuuluu)(oscard);
                            romeon['uri_domain'] = oscard;
                            golfie = _closure1_slot1;
                            option = _closure1_slot2;
                            oscard = 21;
                            oscard = option[oscard];
                            yankee = golfie.bind(zuuluu)(oscard);
                            verify = yankee.track;
                            oscard = _closure1_slot15;
                            oscard = oscard.SHARE_MESSAGE_SENT;
                            oscard = verify.bind(yankee)(oscard, romeon);
                            oscard = 32;
                            oscard = option[oscard];
                            verify = golfie.bind(zuuluu)(oscard);
                            golfie = verify.selectChannel;
                            oscard = {};
                            oscard['guildId'] = offset;
                            offset = report.id;
                            oscard['channelId'] = offset;
                            oscard = golfie.bind(verify)(oscard);
                            golfie = _closure1_slot0;
                            oscard = 33;
                            oscard = option[oscard];
                            golfie = golfie.bind(zuuluu)(oscard);
                            oscard = golfie.transitionToChannel;
                            report = report.id;
                            report = oscard.bind(golfie)(report);
                            tangon = _closure1_slot7;
                            report = tangon.ShareManager;
                            tangon = report.launchApp;
                            tangon = tangon.bind(report)();
 677:
                            return zuuluu;
 680:
                            return michal;
 683:
                            return entity;
                        }
                    };
                    return entity;
                };
                tangon = zuuluu.bind(tangon)(michal);
                _closure2_slot22 = tangon;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            var _closure2_slot22 = entity;
            entity = _closure1_slot19;
            cntext = entity.bind(tangon)();
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 22;
            entity = golfie[entity];
            zuuluu = oscard.bind(tangon)(entity);
            entity = zuuluu.useNavigation;
            output = entity.bind(zuuluu)();
            var _closure2_slot2 = output;
            yankee = _closure1_slot5;
            entity = yankee.useState;
            entity = entity.bind(yankee)(option);
            update = _closure1_slot4;
            foxtra = 2;
            zuuluu = update.bind(tangon)(entity, foxtra);
            entity = 0;
            papara = zuuluu[entity];
            _closure2_slot3 = papara;
            echoed = 1;
            zuuluu = zuuluu[echoed];
            var _closure2_slot4 = zuuluu;
            zuuluu = yankee.useState;
            zuuluu = zuuluu.bind(yankee)(michal);
            zuuluu = update.bind(tangon)(zuuluu, foxtra);
            limora = zuuluu[entity];
            _closure2_slot5 = limora;
            status = zuuluu[echoed];
            var _closure2_slot6 = status;
            report = yankee.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = option;
            zuuluu[1] = michal;
            michal = function() {
                tangon = _closure2_slot4;
                zuuluu = _closure2_slot0;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot6;
                michal = _closure2_slot1;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = report.bind(yankee)(michal, zuuluu);
            zuuluu = 23;
            michal = golfie[zuuluu];
            verify = oscard.bind(tangon)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot10;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                michal = _closure1_slot10;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = option.bind(verify)(report, michal);
            var _closure2_slot7 = michal;
            option = yankee.useMemo;
            report = new Array(1);
            report[0] = michal;
            michal = function() {
                entity = {};
                michal = {'blacklist': null, 'frecencyBoosters': true, 'userFilters': null};
                zuuluu = global;
                report = zuuluu.Set;
                oscard = _closure2_slot7;
                zuuluu = zuuluu.HermesInternal;
                tangon = zuuluu.concat;
                zuuluu = 'user:';
                tangon = tangon.bind(zuuluu)(oscard);
                zuuluu = new Array(1);
                zuuluu[0] = tangon;
                tangon = report.prototype;
                tangon = Object.create(tangon, {constructor: {value: report}});
                option = tangon;
                golfie = zuuluu;
                zuuluu = new option[report](golfie, oscard);
                zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                michal['blacklist'] = zuuluu;
                entity['searchOptions'] = michal;
                return entity;
            };
            report = option.bind(yankee)(michal, report);
            offset = _closure1_slot1;
            michal = 24;
            michal = golfie[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.bind(tangon)(report);
            option = michal.search;
            var _closure2_slot8 = option;
            sizing = michal.query;
            verify = michal.results;
            var _closure2_slot9 = verify;
            michal = 25;
            michal = golfie[michal];
            michal = offset.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            michal = michal.bottom;
            report = yankee.useState;
            backup = '';
            report = report.bind(yankee)(backup);
            report = update.bind(tangon)(report, foxtra);
            ctrled = report[entity];
            report = report[echoed];
            var _closure2_slot10 = report;
            report = yankee.useState;
            kiloes = null;
            report = report.bind(yankee)(kiloes);
            report = update.bind(tangon)(report, foxtra);
            result = report[entity];
            var _closure2_slot11 = result;
            report = report[echoed];
            var _closure2_slot12 = report;
            report = 26;
            report = golfie[report];
            report = offset.bind(tangon)(report);
            report = report.bind(tangon)(source);
            foxtra = update.bind(tangon)(report, foxtra);
            report = foxtra[entity];
            _closure2_slot13 = report;
            foxtra = foxtra[echoed];
            var _closure2_slot14 = foxtra;
            foxtra = yankee.useRef;
            foxtra = foxtra.bind(yankee)(kiloes);
            var _closure2_slot15 = foxtra;
            echoed = yankee.useRef;
            config = echoed.bind(yankee)(kiloes);
            var _closure2_slot16 = config;
            echoed = 27;
            echoed = golfie[echoed];
            update = oscard.bind(tangon)(echoed);
            echoed = update.useFrecencySettings;
            echoed = echoed.bind(update)();
            echoed = golfie[zuuluu];
            vacuum = oscard.bind(tangon)(echoed);
            source = vacuum.useStateFromStores;
            echoed = _closure1_slot9;
            update = new Array(1);
            update[0] = echoed;
            echoed = function() {
                michal = _closure1_slot9;
                entity = michal.isConnected;
                entity = entity.bind(michal)();
                return entity;
            };
            update = source.bind(vacuum)(update, echoed);
            var _closure2_slot17 = update;
            echoed = golfie[zuuluu];
            record = oscard.bind(tangon)(echoed);
            vacuum = record.useStateFromStores;
            echoed = _closure1_slot12;
            source = new Array(1);
            source[0] = echoed;
            echoed = function() {
                michal = _closure1_slot12;
                entity = michal.getFrequentlyWithoutFetchingLatest;
                entity = entity.bind(michal)();
                return entity;
            };
            vacuum = vacuum.bind(record)(source, echoed);
            var _closure2_slot18 = vacuum;
            echoed = golfie[zuuluu];
            target = oscard.bind(tangon)(echoed);
            record = target.useStateFromStores;
            echoed = _closure1_slot13;
            source = new Array(1);
            source[0] = echoed;
            echoed = function() {
                michal = _closure1_slot13;
                entity = michal.getCurrentlySelectedChannelId;
                entity = entity.bind(michal)();
                return entity;
            };
            echoed = record.bind(target)(source, echoed);
            var _closure2_slot19 = echoed;
            source = backup !== sizing;
            var _closure2_slot20 = source;
            sizing = yankee.useMemo;
            backup = new Array(7);
            backup[0] = vacuum;
            backup[1] = source;
            backup[2] = update;
            backup[3] = echoed;
            backup[4] = result;
            backup[5] = verify;
            backup[6] = report;
            verify = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 28;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.formatResultsWithHeaders;
                entity = {};
                report = _closure2_slot9;
                entity['results'] = report;
                report = _closure2_slot13;
                entity['selectedResult'] = report;
                report = _closure2_slot20;
                entity['hasNonEmptyQuery'] = report;
                report = _closure2_slot11;
                entity['queryMode'] = report;
                report = _closure2_slot18;
                entity['frequentChannels'] = report;
                report = _closure2_slot19;
                entity['selectedChannelId'] = report;
                tangon = _closure2_slot17;
                entity['isConnected'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = sizing.bind(yankee)(verify, backup);
            result = yankee.useLayoutEffect;
            sizing = new Array(1);
            sizing[0] = backup;
            verify = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 29;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.DeprecatedLayoutAnimation;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            verify = result.bind(yankee)(verify, sizing);
            verify = 34;
            verify = golfie[verify];
            offset = offset.bind(tangon)(verify);
            verify = function() { // Original name: onSharePress
                entity = undefined;
                tangon = _closure2_slot22;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            verify = offset.bind(tangon)(verify);
            var _closure2_slot21 = verify;
            sizing = yankee.useLayoutEffect;
            offset = new Array(3);
            offset[0] = report;
            offset[1] = output;
            offset[2] = verify;
            verify = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    report = _closure2_slot13;
                    entity = null;
                    oscard = entity != report;
                    entity = undefined;
                    report = undefined;
                    if(!oscard) { _fun00014_ip = 41; continue _fun00013 }
 32:
                    report = function() {
                        tangon = _closure1_slot17;
                        zuuluu = _closure1_slot21;
                        michal = {};
                        entity = function() { // Original name: onPress
                            michal = _closure2_slot21;
                            entity = undefined;
                            entity = michal.bind(entity)();
                            return entity;
                        };
                        michal['onPress'] = entity;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
 41:
                    michal['headerRight'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            verify = sizing.bind(yankee)(verify, offset);
            sizing = yankee.useCallback;
            offset = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot15;
                    report = michal.current;
                    entity = _closure2_slot16;
                    tangon = entity.current;
                    michal = null;
                    entity = michal != report;
                    if(!entity) { _fun00016_ip = 34; continue _fun00015 }
 30:
                    entity = michal != tangon;
 34:
                    if(!entity) { _fun00016_ip = 66; continue _fun00015 }
 37:
                    zuuluu = tangon.measureLayout;
                    michal = _closure1_slot16;
                    entity = function(argFoo, argBar, argBaz, argCor) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            entity = _closure2_slot15;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00018_ip = 45; continue _fun00017 }
 18:
                            michal = zuuluu.scrollTo;
                            entity = {};
                            tangon = argBar;
                            entity['y'] = tangon;
                            tangon = true;
                            entity['animated'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 45:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(report, entity, michal);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            verify = new Array(0);
            output = sizing.bind(yankee)(offset, verify);
            offset = yankee.useCallback;
            verify = new Array(1);
            verify[0] = option;
            option = function(argFoo) {
                report = argFoo;
                zuuluu = _closure2_slot10;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(report);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 35;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.makeAutocompleterSearchParams;
                tangon = zuuluu.bind(tangon)(report);
                golfie = tangon.query;
                zuuluu = tangon.queryMode;
                oscard = tangon.resultTypes;
                report = _closure2_slot8;
                tangon = {};
                tangon['query'] = golfie;
                tangon['resultTypes'] = oscard;
                tangon = report.bind(entity)(tangon);
                michal = _closure2_slot12;
                michal = michal.bind(entity)(zuuluu);
                return entity;
            };
            echoed = offset.bind(yankee)(option, verify);
            yankee = {};
            zuuluu = golfie[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot14;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                entity = _closure1_slot14;
                michal = entity.keyboardHeight;
                entity = 0;
                entity = entity !== michal;
                return entity;
            };
            zuuluu = golfie.bind(option)(oscard, zuuluu);
            if(zuuluu) { _fun00006_ip = 877; continue _fun00005 }
 874:
            entity = michal;
 877:
            yankee['paddingBottom'] = entity;
            entity = kiloes == report;
            update = null;
            if(entity) { _fun00006_ip = 1184; continue _fun00005 }
 894:
            michal = report.type;
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            oscard = 17;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.USER;
            if(!(entity !== michal)) { _fun00006_ip = 1129; continue _fun00005 }
 938:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.TEXT_CHANNEL;
            if(!(entity !== michal)) { _fun00006_ip = 1072; continue _fun00005 }
 971:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.GROUP_DM;
            if(!(entity !== michal)) { _fun00006_ip = 1072; continue _fun00005 }
 1004:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[oscard];
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.AutocompleterResultTypes;
            entity = entity.VOICE_CHANNEL;
            if(!(entity !== michal)) { _fun00006_ip = 1072; continue _fun00005 }
 1037:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 19;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.assertNever;
            entity = entity.bind(michal)(report);
            update = undefined;
            _fun00006_ip = 1184; continue _fun00005;
 1072:
            zuuluu = _closure1_slot17;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ConnectedTextChannel;
            entity = {};
            oscard = false;
            entity['showUnread'] = oscard;
            oscard = report.record;
            entity['channel'] = oscard;
            update = zuuluu.bind(tangon)(michal, entity);
            _fun00006_ip = 1184; continue _fun00005;
 1129:
            zuuluu = _closure1_slot17;
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ConnectedUser;
            entity = {};
            oscard = false;
            entity['showUnread'] = oscard;
            report = report.record;
            entity['user'] = report;
            update = zuuluu.bind(tangon)(michal, entity);
 1184:
            zuuluu = _closure1_slot17;
            michal = _closure1_slot6;
            entity = {};
            report = cntext.container;
            entity['style'] = report;
            golfie = _closure1_slot17;
            sierra = _closure1_slot1;
            vacuum = _closure1_slot2;
            report = 36;
            report = vacuum[report];
            oscard = sierra.bind(tangon)(report);
            report = {};
            option = cntext.keyboardAwareView;
            report['style'] = option;
            offset = _closure1_slot18;
            verify = _closure1_slot8;
            option = {};
            option['ref'] = foxtra;
            foxtra = cntext.innerView;
            option['style'] = foxtra;
            option['contentContainerStyle'] = yankee;
            yankee = 'always';
            option['keyboardShouldPersistTaps'] = yankee;
            result = _closure1_slot17;
            target = _closure1_slot0;
            sizing = 20;
            yankee = vacuum[sizing];
            yankee = target.bind(tangon)(yankee);
            foxtra = yankee.FormTitle;
            yankee = {};
            record = 16;
            source = vacuum[record];
            source = target.bind(tangon)(source);
            equals = source.intl;
            whisks = equals.string;
            source = vacuum[record];
            source = target.bind(tangon)(source);
            source = source.t;
            source = source.0mUmIi;
            source = whisks.bind(equals)(source);
            yankee['title'] = source;
            foxtra = result.bind(tangon)(foxtra, yankee);
            yankee = new Array(7);
            yankee[0] = foxtra;
            source = _closure1_slot17;
            foxtra = 37;
            foxtra = vacuum[foxtra];
            result = sierra.bind(tangon)(foxtra);
            foxtra = {};
            foxtra['attachments'] = papara;
            papara = function(argFoo) { // Original name: handlePressAttachment
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = _closure2_slot4;
                entity = undefined;
                michal = function(argFoo) {
                    zuuluu = argFoo;
                    michal = zuuluu.filter;
                    entity = function(argFoo) {
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = entity !== michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 29;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.DeprecatedLayoutAnimation;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            foxtra['onPressAttachment'] = papara;
            foxtra = source.bind(tangon)(result, foxtra);
            yankee[1] = foxtra;
            papara = _closure1_slot17;
            foxtra = 38;
            result = vacuum[foxtra];
            source = sierra.bind(tangon)(result);
            result = {};
            result['value'] = limora;
            result['onChangeText'] = status;
            status = 39;
            status = vacuum[status];
            status = sierra.bind(tangon)(status);
            result['icon'] = status;
            status = cntext.commentColors;
            status = status.backgroundColor;
            result['backgroundColor'] = status;
            status = cntext.commentColors;
            status = status.color;
            result['placeholderTextColor'] = status;
            status = vacuum[record];
            status = target.bind(tangon)(status);
            limora = status.intl;
            sierra = limora.string;
            status = vacuum[record];
            status = target.bind(tangon)(status);
            status = status.t;
            status = status.i4GlAQ;
            status = sierra.bind(limora)(status);
            result['placeholder'] = status;
            result = papara.bind(tangon)(source, result);
            yankee[2] = result;
            source = _closure1_slot17;
            result = {};
            result['ref'] = config;
            result = source.bind(tangon)(michal, result);
            yankee[3] = result;
            source = _closure1_slot17;
            sizing = vacuum[sizing];
            sizing = target.bind(tangon)(sizing);
            result = sizing.FormTitle;
            sizing = {};
            config = vacuum[record];
            config = target.bind(tangon)(config);
            papara = config.intl;
            config = papara.string;
            vacuum = vacuum[record];
            vacuum = target.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.MR7/kp;
            vacuum = config.bind(papara)(vacuum);
            sizing['title'] = vacuum;
            sizing = source.bind(tangon)(result, sizing);
            yankee[4] = sizing;
            if(!(kiloes == update)) { _fun00006_ip = 1810; continue _fun00005 }
 1660:
            sizing = _closure1_slot17;
            source = _closure1_slot1;
            result = _closure1_slot2;
            foxtra = result[foxtra];
            kiloes = source.bind(tangon)(foxtra);
            foxtra = {};
            foxtra['value'] = ctrled;
            foxtra['onChangeText'] = echoed;
            echoed = 42;
            echoed = result[echoed];
            echoed = source.bind(tangon)(echoed);
            foxtra['icon'] = echoed;
            echoed = cntext.searchColors;
            echoed = echoed.backgroundColor;
            foxtra['backgroundColor'] = echoed;
            echoed = cntext.searchColors;
            echoed = echoed.color;
            foxtra['placeholderTextColor'] = echoed;
            ctrled = _closure1_slot0;
            echoed = result[record];
            echoed = ctrled.bind(tangon)(echoed);
            source = echoed.intl;
            echoed = source.string;
            result = result[record];
            result = ctrled.bind(tangon)(result);
            result = result.t;
            result = result.Z+oF8v;
            result = echoed.bind(source)(result);
            foxtra['placeholder'] = result;
            foxtra['onFocus'] = output;
            foxtra = sizing.bind(tangon)(kiloes, foxtra);
            _fun00006_ip = 2036; continue _fun00005;
 1810:
            output = _closure1_slot18;
            sizing = _closure1_slot6;
            kiloes = {};
            result = cntext.selectedResultContainer;
            kiloes['style'] = result;
            echoed = _closure1_slot17;
            result = {};
            source = cntext.selectedResult;
            result['style'] = source;
            result['children'] = update;
            echoed = echoed.bind(tangon)(sizing, result);
            result = new Array(2);
            result[0] = echoed;
            source = _closure1_slot17;
            config = _closure1_slot0;
            ctrled = _closure1_slot2;
            vacuum = 40;
            echoed = ctrled[vacuum];
            echoed = config.bind(tangon)(echoed);
            update = echoed.CircularIconButton;
            echoed = {};
            cntext = cntext.selectedResultCancelIcon;
            echoed['style'] = cntext;
            cntext = _closure1_slot1;
            sequen = 41;
            sequen = ctrled[sequen];
            sequen = cntext.bind(tangon)(sequen);
            echoed['source'] = sequen;
            vacuum = ctrled[vacuum];
            vacuum = config.bind(tangon)(vacuum);
            vacuum = vacuum.CircularIconButton;
            vacuum = vacuum.Sizes;
            vacuum = vacuum.LARGE_40;
            echoed['size'] = vacuum;
            vacuum = function() { // Original name: onPress
                zuuluu = _closure2_slot14;
                michal = undefined;
                entity = null;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            echoed['onPress'] = vacuum;
            vacuum = ctrled[record];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.intl;
            vacuum = sequen.string;
            ctrled = ctrled[record];
            ctrled = config.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.cpT0Cg;
            ctrled = vacuum.bind(sequen)(ctrled);
            echoed['accessibilityLabel'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            result[1] = echoed;
            kiloes['children'] = result;
            foxtra = output.bind(tangon)(sizing, kiloes);
 2036:
            yankee[5] = foxtra;
            foxtra = backup.map;
            romeon = function(argFoo) {
                tangon = _closure1_slot22;
                zuuluu = _closure2_slot14;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            romeon = foxtra.bind(backup)(romeon);
            yankee[6] = romeon;
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['renderSearchResult'] = michal;
    return entity;
})();