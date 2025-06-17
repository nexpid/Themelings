// app/modules/threads/native/components/thread_creation/CreateThreadView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: CreateThreadViewInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            quebec = entity.threadSettingsDraft;
            var _closure2_slot0 = quebec;
            foxtra = entity.parentChannel;
            var _closure2_slot1 = foxtra;
            echoed = entity.screenIndex;
            entity = _closure1_slot14;
            tangon = undefined;
            sizing = entity.bind(tangon)();
            variable39 = _closure1_slot0;
            variable37 = _closure1_slot2;
            variable42 = 10;
            entity = variable37[variable42];
            michal = variable39.bind(tangon)(entity);
            entity = michal.usePrivateThreadMode;
            variable41 = entity.bind(michal)(foxtra);
            report = _closure1_slot5;
            zuuluu = report.useEffect;
            entity = foxtra.id;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = function() {
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 11;
                    zuuluu = oscard[tangon];
                    entity = undefined;
                    offset = report.bind(entity)(zuuluu);
                    verify = offset.clearDraft;
                    zuuluu = _closure2_slot1;
                    option = zuuluu.id;
                    golfie = _closure1_slot8;
                    golfie = golfie.ThreadSettings;
                    golfie = verify.bind(offset)(option, golfie);
                    tangon = oscard[tangon];
                    report = report.bind(entity)(tangon);
                    tangon = report.clearDraft;
                    zuuluu = zuuluu.id;
                    michal = _closure1_slot8;
                    michal = michal.FirstThreadMessage;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            michal = _closure1_slot5;
            entity = michal.useState;
            yankee = null;
            zuuluu = entity.bind(michal)(yankee);
            michal = _closure1_slot4;
            entity = 2;
            michal = michal.bind(tangon)(zuuluu, entity);
            backup = 0;
            equals = michal[backup];
            entity = 1;
            entity = michal[entity];
            michal = {};
            michal['parentChannel'] = foxtra;
            michal['threadSettingsDraft'] = quebec;
            michal['privateThreadMode'] = variable41;
            michal['setNameError'] = entity;
            entity = function(argFoo) { // Original name: useSubmitForm
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    report = michal.parentChannel;
                    var _closure3_slot0 = report;
                    golfie = michal.threadSettingsDraft;
                    var _closure3_slot1 = golfie;
                    yankee = michal.privateThreadMode;
                    option = michal.setNameError;
                    var _closure3_slot2 = option;
                    michal = undefined;
                    var _closure3_slot6 = michal;
                    oscard = _closure1_slot0;
                    romeon = _closure1_slot2;
                    tangon = 27;
                    tangon = romeon[tangon];
                    oscard = oscard.bind(michal)(tangon);
                    tangon = oscard.useNavigation;
                    tangon = tangon.bind(oscard)();
                    var _closure3_slot3 = tangon;
                    offset = _closure1_slot5;
                    verify = offset.useRef;
                    oscard = false;
                    oscard = verify.bind(offset)(oscard);
                    var _closure3_slot4 = oscard;
                    oscard = golfie.parentMessageId;
                    offset = null;
                    backup = offset == oscard;
                    var _closure3_slot5 = backup;
                    foxtra = _closure1_slot5;
                    verify = foxtra.useCallback;
                    oscard = new Array(5);
                    oscard[0] = backup;
                    oscard[1] = tangon;
                    tangon = golfie.location;
                    oscard[2] = tangon;
                    tangon = golfie.parentMessageId;
                    oscard[3] = tangon;
                    oscard[4] = report;
                    tangon = function(argFoo) {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            report = argFoo;
                            michal = _closure3_slot1;
                            zuuluu = michal.location;
                            michal = 'Message Shortcut';
                            if(!(michal === zuuluu)) { _fun00006_ip = 235; continue _fun00005 }
 28:
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 28;
                            michal = tangon[michal];
                            verify = undefined;
                            oscard = zuuluu.bind(verify)(michal);
                            tangon = oscard.track;
                            michal = _closure1_slot11;
                            zuuluu = michal.MESSAGE_SHORTCUT_ACTION_SENT;
                            michal = {};
                            option = _closure3_slot0;
                            offset = option.id;
                            michal['channel_id'] = offset;
                            foxtra = null;
                            offset = foxtra == option;
                            option = undefined;
                            if(offset) { _fun00006_ip = 103; continue _fun00005 }
 94:
                            offset = _closure3_slot0;
                            option = offset.guild_id;
 103:
                            michal['guild_id'] = option;
                            option = _closure3_slot1;
                            option = option.parentMessageId;
                            michal['original_message_id'] = option;
                            option = 'thread';
                            michal['action'] = option;
                            yankee = _closure1_slot0;
                            option = _closure1_slot2;
                            offset = 29;
                            option = option[offset];
                            romeon = yankee.bind(verify)(option);
                            yankee = romeon.collectGuildAnalyticsMetadata;
                            option = _closure3_slot0;
                            foxtra = foxtra == option;
                            option = undefined;
                            if(foxtra) { _fun00006_ip = 178; continue _fun00005 }
 169:
                            foxtra = _closure3_slot0;
                            option = foxtra.guild_id;
 178:
                            backup = yankee.bind(romeon)(option);
                            kiloes = michal;
                            option = copyDataProperties(kiloes, backup);
                            option = _closure1_slot0;
                            golfie = _closure1_slot2;
                            golfie = golfie[offset];
                            verify = option.bind(verify)(golfie);
                            option = verify.collectChannelAnalyticsMetadata;
                            golfie = _closure3_slot0;
                            backup = option.bind(verify)(golfie);
                            kiloes = michal;
                            golfie = copyDataProperties(kiloes, backup);
                            michal = tangon.bind(oscard)(zuuluu, michal);
 235:
                            zuuluu = _closure3_slot3;
                            michal = null;
                            if(!(michal == zuuluu)) { _fun00006_ip = 301; continue _fun00005 }
 245:
                            michal = _closure3_slot5;
                            if(!michal) { _fun00006_ip = 363; continue _fun00005 }
 252:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 30;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            oscard = tangon.bind(michal)(zuuluu);
                            tangon = oscard.transitionToGuild;
                            zuuluu = report.guild_id;
                            michal = report.id;
                            michal = tangon.bind(oscard)(zuuluu, michal);
                            _fun00006_ip = 363; continue _fun00005;
 301:
                            zuuluu = _closure3_slot3;
                            michal = zuuluu.navigate;
                            entity = {'name': 'channel', 'key': 'new-thread', 'params': null, 'merge': true};
                            tangon = {};
                            oscard = report.guild_id;
                            tangon['guildId'] = oscard;
                            report = report.id;
                            tangon['channelId'] = report;
                            report = false;
                            tangon['showCreateThread'] = report;
                            entity['params'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 363:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = verify.bind(foxtra)(tangon, oscard);
                    oscard = _closure1_slot1;
                    tangon = 31;
                    tangon = romeon[tangon];
                    oscard = oscard.bind(michal)(tangon);
                    tangon = {};
                    tangon['parentChannel'] = report;
                    romeon = golfie.parentMessageId;
                    tangon['parentMessageId'] = romeon;
                    tangon['threadSettings'] = golfie;
                    tangon['privateThreadMode'] = yankee;
                    yankee = golfie.location;
                    romeon = offset != yankee;
                    offset = '(unknown)';
                    if(!romeon) { _fun00004_ip = 242; continue _fun00003 }
 239:
                    offset = yankee;
 242:
                    tangon['location'] = offset;
                    tangon['onThreadCreated'] = verify;
                    verify = true;
                    tangon['useDefaultThreadName'] = verify;
                    oscard = oscard.bind(michal)(tangon);
                    _closure3_slot6 = oscard;
                    tangon = _closure1_slot5;
                    zuuluu = tangon.useCallback;
                    entity = function() {
                        tangon = _closure1_slot3;
                        zuuluu = undefined;
                        michal = function* (argFoo, argBar) {
                            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(michal) { _fun00008_ip = 402; continue _fun00007 }
 10:
                                    option = argFoo;
                                    oscard = argBar;
                                    michal = undefined;
                                    report = undefined;
                                    golfie = _closure3_slot4;
                                    golfie = golfie.current;
                                    if(golfie) { _fun00008_ip = 399; continue _fun00007 }
 38:
                                    verify = _closure3_slot4;
                                    golfie = true;
                                    verify['current'] = golfie;
                                    verify = _closure3_slot2;
                                    golfie = null;
                                    verify = verify.bind(michal)(golfie);
 61: // try_start_0
                                    verify = _closure3_slot1;
                                    verify = verify.parentMessageId;
                                    if(!(golfie == verify)) { _fun00008_ip = 105; continue _fun00007 }
 75:
                                    verify = _closure3_slot1;
                                    verify = verify.name;
                                    if(!(golfie != verify)) { _fun00008_ip = 192; continue _fun00007 }
 88:
                                    verify = _closure3_slot1;
                                    offset = verify.name;
                                    verify = '';
                                    if(!(verify !== offset)) { _fun00008_ip = 192; continue _fun00007 }
 105:
                                    verify = _closure3_slot6;
                                    oscard = verify.bind(michal)(option, oscard);
                                    SaveGenerator(address=119);
 117:
                                    return oscard;
 119:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(option) { _fun00008_ip = 189; continue _fun00007 }
 125:
                                    offset = _closure1_slot1;
                                    yankee = _closure1_slot2;
                                    verify = 11;
                                    verify = yankee[verify];
                                    romeon = offset.bind(michal)(verify);
                                    yankee = romeon.saveDraft;
                                    verify = _closure3_slot0;
                                    offset = verify.id;
                                    option = _closure1_slot8;
                                    verify = option.FirstThreadMessage;
                                    option = '';
                                    option = yankee.bind(romeon)(offset, option, verify);
 184: // try_end0
                                    _fun00008_ip = 387; continue _fun00007;
 189:
                                    return oscard;
 192: // try_start_1
                                    offset = _closure3_slot2;
                                    option = _closure1_slot0;
                                    verify = _closure1_slot2;
                                    oscard = 32;
                                    oscard = verify[oscard];
                                    yankee = option.bind(michal)(oscard);
                                    oscard = yankee.makeEmptyTitleError;
                                    oscard = oscard.bind(yankee)();
                                    oscard = offset.bind(michal)(oscard);
                                    oscard = 33;
                                    oscard = verify[oscard];
                                    option = option.bind(michal)(oscard);
                                    oscard = option.dismissKeyboard;
                                    oscard = oscard.bind(option)();
                                    option = _closure3_slot4;
                                    oscard = false;
                                    option['current'] = oscard;
 268: // try_end1
                                    return michal;
 271: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register=5);
                                    tangon = oscard;
                                    oscard = oscard.body;
                                    report = oscard;
                                    oscard = golfie == oscard;
                                    golfie = undefined;
                                    if(oscard) { _fun00008_ip = 298; continue _fun00007 }
 293:
                                    golfie = report.code;
 298:
                                    report = _closure1_slot10;
                                    report = report.AUTOMOD_TITLE_BLOCKED;
                                    if(!(golfie === report)) { _fun00008_ip = 387; continue _fun00007 }
 315:
                                    golfie = _closure3_slot2;
                                    report = _closure1_slot0;
                                    oscard = _closure1_slot2;
                                    option = 32;
                                    option = oscard[option];
                                    offset = report.bind(michal)(option);
                                    verify = offset.makeAutomodViolationError;
                                    option = tangon.body;
                                    tangon = _closure3_slot0;
                                    tangon = verify.bind(offset)(option, tangon);
                                    tangon = golfie.bind(michal)(tangon);
                                    tangon = 33;
                                    tangon = oscard[tangon];
                                    report = report.bind(michal)(tangon);
                                    tangon = report.dismissKeyboard;
                                    tangon = tangon.bind(report)();
 387:
                                    tangon = _closure3_slot4;
                                    zuuluu = false;
                                    tangon['current'] = zuuluu;
 399:
                                    return michal;
 402:
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
                    michal = entity.bind(michal)();
                    entity = new Array(5);
                    entity[0] = option;
                    option = golfie.parentMessageId;
                    entity[1] = option;
                    golfie = golfie.name;
                    entity[2] = golfie;
                    entity[3] = oscard;
                    entity[4] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            output = entity.bind(tangon)(michal);
            oscard = _closure1_slot1;
            entity = 12;
            michal = variable37[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 13;
            michal = variable37[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.CREATE_THREAD;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            michal = 14;
            michal = variable37[michal];
            michal = oscard.bind(tangon)(michal);
            kiloes = michal.bind(tangon)();
            michal = 15;
            michal = variable37[michal];
            zuuluu = oscard.bind(tangon)(michal);
            vacuum = false;
            option = true;
            michal = {'isKeyboardAwareOnAndroid': false, 'includeKeyboardHeightIOS': true};
            michal = zuuluu.bind(tangon)(michal);
            source = michal.insets;
            michal = foxtra.isForumLikeChannel;
            sierra = michal.bind(foxtra)();
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            update = michal.bind(zuuluu)(yankee);
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            result = michal.bind(zuuluu)(yankee);
            michal = quebec.parentMessageId;
            variable36 = yankee != michal;
            zuuluu = _closure1_slot13;
            entity = variable37[entity];
            entity = variable39.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot12;
            report = 16;
            report = variable37[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['absolute'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot6;
            oscard = {};
            romeon = sizing.container;
            verify = new Array(2);
            verify[0] = romeon;
            romeon = {};
            source = source.bottom;
            kiloes = kiloes.bottom;
            kiloes = source - kiloes;
            romeon['marginBottom'] = kiloes;
            verify[1] = romeon;
            oscard['style'] = verify;
            kiloes = _closure1_slot12;
            romeon = _closure1_slot6;
            verify = {};
            source = sizing.expander;
            verify['style'] = source;
            romeon = kiloes.bind(tangon)(romeon, verify);
            verify = new Array(5);
            verify[0] = romeon;
            source = _closure1_slot12;
            kiloes = _closure1_slot7;
            romeon = {};
            ctrled = sizing.containerContent;
            romeon['style'] = ctrled;
            config = _closure1_slot13;
            sequen = _closure1_slot6;
            ctrled = {};
            record = sizing.options;
            ctrled['style'] = record;
            papara = _closure1_slot13;
            cntext = _closure1_slot6;
            record = {};
            target = sizing.optionsInner;
            record['style'] = target;
            limora = _closure1_slot12;
            status = _closure1_slot6;
            target = {};
            whisks = sizing.threadIconContainer;
            target['style'] = whisks;
            variable43 = _closure1_slot12;
            whisks = 17;
            whisks = variable37[whisks];
            whisks = variable39.bind(tangon)(whisks);
            variable40 = whisks.ThreadIcon;
            whisks = {'color': 'white', 'size': 'lg'};
            whisks = variable43.bind(tangon)(variable40, whisks);
            target['children'] = whisks;
            status = limora.bind(tangon)(status, target);
            target = new Array(4);
            target[0] = status;
            whisks = _closure1_slot12;
            status = 18;
            status = variable37[status];
            status = variable39.bind(tangon)(status);
            limora = status.Text;
            status = {'style': null, 'variant': 'text-xs/bold', 'color': 'interactive-normal'};
            variable40 = sizing.title;
            status['style'] = variable40;
            variable43 = 19;
            variable37 = variable37[variable43];
            variable37 = variable39.bind(tangon)(variable37);
            variable39 = variable37.intl;
            variable37 = variable39.string;
            variable44 = _closure1_slot0;
            variable40 = _closure1_slot2;
            variable40 = variable40[variable43];
            variable40 = variable44.bind(tangon)(variable40);
            variable40 = variable40.t;
            if(variable36) { _fun00002_ip = 719; continue _fun00001 }
 711:
            variable36 = variable40.j3XWjI;
            _fun00002_ip = 727; continue _fun00001;
 719:
            variable36 = variable40.JPvIiI;
 727:
            variable37 = variable37.bind(variable39)(variable36);
            variable36 = variable37.toUpperCase;
            variable36 = variable36.bind(variable37)();
            status['children'] = variable36;
            status = whisks.bind(tangon)(limora, status);
            target[1] = status;
            whisks = _closure1_slot12;
            limora = _closure1_slot1;
            variable36 = _closure1_slot2;
            status = 20;
            status = variable36[status];
            limora = limora.bind(tangon)(status);
            status = {};
            status['ref'] = result;
            status['chatInputRef'] = update;
            status['threadSettingsDraft'] = quebec;
            status['threadNameError'] = equals;
            status = whisks.bind(tangon)(limora, status);
            target[2] = status;
            status = null;
            if(sierra) { _fun00002_ip = 1165; continue _fun00001 }
 819:
            sierra = quebec.parentMessageId;
            sierra = yankee != sierra;
            status = null;
            if(sierra) { _fun00002_ip = 1165; continue _fun00001 }
 837:
            limora = _closure1_slot0;
            sierra = _closure1_slot2;
            sierra = sierra[variable42];
            sierra = limora.bind(tangon)(sierra);
            sierra = sierra.PrivateThreadMode;
            sierra = sierra.Disabled;
            status = null;
            if(!(variable41 !== sierra)) { _fun00002_ip = 1165; continue _fun00001 }
 875:
            whisks = _closure1_slot12;
            limora = _closure1_slot6;
            sierra = {};
            equals = sizing.optionPrivateThread;
            sierra['style'] = equals;
            variable37 = _closure1_slot12;
            variable40 = _closure1_slot0;
            variable39 = _closure1_slot2;
            equals = 21;
            equals = variable39[equals];
            equals = variable40.bind(tangon)(equals);
            variable36 = equals.TableSwitchRow;
            equals = {'start': true, 'end': true};
            variable44 = variable39[variable43];
            variable44 = variable40.bind(tangon)(variable44);
            variable46 = variable44.intl;
            variable45 = variable46.string;
            variable44 = variable39[variable43];
            variable44 = variable40.bind(tangon)(variable44);
            variable44 = variable44.t;
            variable44 = variable44.Wy5RIS;
            variable44 = variable45.bind(variable46)(variable44);
            equals['accessibilityHint'] = variable44;
            variable44 = variable39[variable42];
            variable44 = variable40.bind(tangon)(variable44);
            variable44 = variable44.PrivateThreadMode;
            variable44 = variable44.Enabled;
            variable44 = variable41 !== variable44;
            equals['disabled'] = variable44;
            variable44 = variable39[variable43];
            variable44 = variable40.bind(tangon)(variable44);
            variable46 = variable44.intl;
            variable45 = variable46.string;
            variable44 = variable39[variable43];
            variable44 = variable40.bind(tangon)(variable44);
            variable44 = variable44.t;
            variable44 = variable44.F1zyvb;
            variable44 = variable45.bind(variable46)(variable44);
            equals['label'] = variable44;
            variable44 = variable39[variable43];
            variable44 = variable40.bind(tangon)(variable44);
            variable45 = variable44.intl;
            variable44 = variable45.string;
            variable43 = variable39[variable43];
            variable43 = variable40.bind(tangon)(variable43);
            variable43 = variable43.t;
            variable43 = variable43.Wy5RIS;
            variable43 = variable44.bind(variable45)(variable43);
            equals['subLabel'] = variable43;
            variable39 = variable39[variable42];
            variable40 = variable40.bind(tangon)(variable39);
            variable39 = variable40.getIsPrivate;
            variable39 = variable39.bind(variable40)(quebec, variable41);
            equals['value'] = variable39;
            variable38 = function(argFoo) { // Original name: onValueChange
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot0;
                    tangon = entity.parentChannelId;
                    entity = null;
                    if(!(entity != tangon)) { _fun00010_ip = 66; continue _fun00009 }
 19:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.changeThreadSettings;
                    entity = {};
                    report = argFoo;
                    entity['isPrivate'] = report;
                    entity = michal.bind(zuuluu)(tangon, entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            equals['onValueChange'] = variable38;
            equals = variable37.bind(tangon)(variable36, equals);
            sierra['children'] = equals;
            status = whisks.bind(tangon)(limora, sierra);
 1165:
            target[3] = status;
            record['children'] = target;
            cntext = papara.bind(tangon)(cntext, record);
            record = new Array(2);
            record[0] = cntext;
            cntext = quebec.parentMessageId;
            papara = yankee != cntext;
            cntext = null;
            if(!papara) { _fun00002_ip = 1330; continue _fun00001 }
 1205:
            status = _closure1_slot13;
            target = _closure1_slot6;
            papara = {};
            sierra = sizing.parentMessageContainer;
            papara['style'] = sierra;
            whisks = _closure1_slot12;
            limora = _closure1_slot6;
            sierra = {};
            equals = sizing.border;
            sierra['style'] = equals;
            limora = whisks.bind(tangon)(limora, sierra);
            sierra = new Array(2);
            sierra[0] = limora;
            equals = _closure1_slot12;
            whisks = _closure1_slot0;
            variable36 = _closure1_slot2;
            limora = 22;
            limora = variable36[limora];
            limora = whisks.bind(tangon)(limora);
            whisks = limora.ThreadCreationStarterMessage;
            limora = {};
            variable36 = foxtra.id;
            limora['channelId'] = variable36;
            quebec = quebec.parentMessageId;
            limora['messageId'] = quebec;
            limora = equals.bind(tangon)(whisks, limora);
            sierra[1] = limora;
            papara['children'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 1330:
            record[1] = cntext;
            ctrled['children'] = record;
            ctrled = config.bind(tangon)(sequen, ctrled);
            romeon['children'] = ctrled;
            romeon = source.bind(tangon)(kiloes, romeon);
            verify[1] = romeon;
            romeon = foxtra.rateLimitPerUser;
            romeon = romeon > backup;
            yankee = null;
            if(!romeon) { _fun00002_ip = 1464; continue _fun00001 }
 1373:
            kiloes = _closure1_slot12;
            backup = _closure1_slot6;
            romeon = {};
            sizing = sizing.typingWrapper;
            romeon['style'] = sizing;
            ctrled = _closure1_slot12;
            source = _closure1_slot1;
            sequen = _closure1_slot2;
            sizing = 23;
            sizing = sequen[sizing];
            source = source.bind(tangon)(sizing);
            sizing = {};
            sequen = foxtra.id;
            sizing['channelId'] = sequen;
            sizing['hasTypingText'] = vacuum;
            vacuum = _closure1_slot9;
            vacuum = vacuum.CreateThread;
            sizing['slowmodeType'] = vacuum;
            sizing = ctrled.bind(tangon)(source, sizing);
            romeon['children'] = sizing;
            yankee = kiloes.bind(tangon)(backup, romeon);
 1464:
            verify[2] = yankee;
            sizing = _closure1_slot12;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            romeon = 24;
            romeon = backup[romeon];
            kiloes = yankee.bind(tangon)(romeon);
            romeon = {};
            romeon['ref'] = update;
            romeon['channel'] = foxtra;
            romeon['screenIndex'] = echoed;
            romeon['secondaryTextFieldRef'] = result;
            romeon['threadCreationCallback'] = output;
            romeon = sizing.bind(tangon)(kiloes, romeon);
            verify[3] = romeon;
            romeon = _closure1_slot12;
            offset = 25;
            offset = backup[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            foxtra = foxtra.id;
            offset['channelId'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[4] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    kiloes = 0;
    tangon = oscard[kiloes];
    entity = undefined;
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    yankee = 1;
    tangon = oscard[yankee];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    backup = tangon.StyleSheet;
    option = tangon.View;
    var _closure1_slot6 = option;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DraftType;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SlowmodeType;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.AbortCodes;
    var _closure1_slot10 = option;
    tangon = tangon.AnalyticEvents;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot12 = option;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    romeon = 9;
    sizing = oscard[romeon];
    sizing = foxtra.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_BASE_PRIMARY;
    offset['backgroundColor'] = sizing;
    offset['flex'] = yankee;
    tangon['container'] = offset;
    offset = {};
    offset['flexGrow'] = kiloes;
    tangon['containerContent'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tangon['expander'] = offset;
    offset = {'height': 1, 'backgroundColor': null, 'alignSelf': 'stretch', 'marginBottom': 16};
    yankee = oscard[romeon];
    yankee = foxtra.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    yankee = 16;
    tangon['border'] = offset;
    offset = {};
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_16;
    offset['marginTop'] = kiloes;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    offset['marginBottom'] = kiloes;
    tangon['title'] = offset;
    offset = {};
    kiloes = 12;
    offset['marginHorizontal'] = kiloes;
    tangon['options'] = offset;
    offset = {};
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_16;
    offset['paddingBottom'] = kiloes;
    tangon['optionsInner'] = offset;
    offset = {};
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_8;
    offset['paddingTop'] = kiloes;
    tangon['optionPrivateThread'] = offset;
    offset = {};
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_64;
    offset['width'] = kiloes;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_64;
    offset['height'] = kiloes;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_16;
    offset['marginTop'] = kiloes;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.radii;
    kiloes = kiloes.xxl;
    offset['borderRadius'] = kiloes;
    kiloes = oscard[romeon];
    kiloes = foxtra.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_ACCENT;
    offset['backgroundColor'] = kiloes;
    kiloes = 'center';
    offset['justifyContent'] = kiloes;
    offset['alignItems'] = kiloes;
    tangon['threadIconContainer'] = offset;
    offset = {};
    backup = backup.hairlineWidth;
    offset['borderBottomWidth'] = backup;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    offset['paddingHorizontal'] = backup;
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_4;
    offset['paddingVertical'] = backup;
    backup = 'flex-end';
    offset['justifyContent'] = backup;
    backup = 'row';
    offset['flexDirection'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.CHAT_BORDER;
    offset['borderColor'] = romeon;
    tangon['typingWrapper'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tangon['parentMessageContainer'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot14 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            golfie = entity.screenIndex;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 26;
            entity = report[entity];
            report = undefined;
            entity = tangon.bind(report)(entity);
            oscard = entity.bind(report)(zuuluu);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00012_ip = 96; continue _fun00011 }
 53:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot15;
            michal = {};
            option = oscard.parentChannel;
            michal['parentChannel'] = option;
            michal['screenIndex'] = golfie;
            oscard = oscard.threadSettingsDraft;
            michal['threadSettingsDraft'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 96:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 34;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/native/components/thread_creation/CreateThreadView.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['CreateThreadView'] = michal;
    return entity;
})();