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
            equals = entity.threadSettingsDraft;
            var _closure2_slot0 = equals;
            foxtra = entity.parentChannel;
            var _closure2_slot1 = foxtra;
            echoed = entity.screenIndex;
            entity = _closure1_slot14;
            tangon = undefined;
            sizing = entity.bind(tangon)();
            variable38 = _closure1_slot0;
            variable36 = _closure1_slot2;
            variable41 = 10;
            entity = variable36[variable41];
            michal = variable38.bind(tangon)(entity);
            entity = michal.usePrivateThreadMode;
            variable40 = entity.bind(michal)(foxtra);
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
            whisks = michal[backup];
            entity = 1;
            entity = michal[entity];
            michal = {};
            michal['parentChannel'] = foxtra;
            michal['threadSettingsDraft'] = equals;
            michal['privateThreadMode'] = variable40;
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
            golfie = _closure1_slot1;
            entity = 12;
            michal = variable36[entity];
            zuuluu = golfie.bind(tangon)(michal);
            michal = 13;
            michal = variable36[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.CREATE_THREAD;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            michal = 14;
            michal = variable36[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            verify = michal.bottom;
            michal = foxtra.isForumLikeChannel;
            status = michal.bind(foxtra)();
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            update = michal.bind(zuuluu)(yankee);
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            result = michal.bind(zuuluu)(yankee);
            michal = equals.parentMessageId;
            quebec = yankee != michal;
            zuuluu = _closure1_slot13;
            entity = variable36[entity];
            entity = variable38.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            option = _closure1_slot12;
            report = 15;
            report = variable36[report];
            oscard = golfie.bind(tangon)(report);
            report = {};
            romeon = true;
            report['absolute'] = romeon;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            oscard = 16;
            oscard = variable36[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            romeon = sizing.container;
            oscard['style'] = romeon;
            verify = -verify;
            oscard['keyboardHeightOffset'] = verify;
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
            sequen = _closure1_slot13;
            vacuum = _closure1_slot6;
            ctrled = {};
            config = sizing.options;
            ctrled['style'] = config;
            cntext = _closure1_slot13;
            record = _closure1_slot6;
            config = {};
            papara = sizing.optionsInner;
            config['style'] = papara;
            sierra = _closure1_slot12;
            target = _closure1_slot6;
            papara = {};
            limora = sizing.threadIconContainer;
            papara['style'] = limora;
            variable42 = _closure1_slot12;
            limora = 17;
            limora = variable36[limora];
            limora = variable38.bind(tangon)(limora);
            variable39 = limora.ThreadIcon;
            limora = {'color': 'white', 'size': 'lg'};
            limora = variable42.bind(tangon)(variable39, limora);
            papara['children'] = limora;
            target = sierra.bind(tangon)(target, papara);
            papara = new Array(4);
            papara[0] = target;
            limora = _closure1_slot12;
            target = 18;
            target = variable36[target];
            target = variable38.bind(tangon)(target);
            sierra = target.Text;
            target = {'style': null, 'variant': 'text-xs/bold', 'color': 'interactive-normal'};
            variable39 = sizing.title;
            target['style'] = variable39;
            variable42 = 19;
            variable36 = variable36[variable42];
            variable36 = variable38.bind(tangon)(variable36);
            variable38 = variable36.intl;
            variable36 = variable38.string;
            variable43 = _closure1_slot0;
            variable39 = _closure1_slot2;
            variable39 = variable39[variable42];
            variable39 = variable43.bind(tangon)(variable39);
            variable39 = variable39.t;
            if(quebec) { _fun00002_ip = 673; continue _fun00001 }
 665:
            quebec = variable39.j3XWjI;
            _fun00002_ip = 681; continue _fun00001;
 673:
            quebec = variable39.JPvIiI;
 681:
            variable36 = variable36.bind(variable38)(quebec);
            quebec = variable36.toUpperCase;
            quebec = quebec.bind(variable36)();
            target['children'] = quebec;
            target = limora.bind(tangon)(sierra, target);
            papara[1] = target;
            limora = _closure1_slot12;
            sierra = _closure1_slot1;
            quebec = _closure1_slot2;
            target = 20;
            target = quebec[target];
            sierra = sierra.bind(tangon)(target);
            target = {};
            target['ref'] = result;
            target['chatInputRef'] = update;
            target['threadSettingsDraft'] = equals;
            target['threadNameError'] = whisks;
            target = limora.bind(tangon)(sierra, target);
            papara[2] = target;
            target = null;
            if(status) { _fun00002_ip = 1119; continue _fun00001 }
 773:
            status = equals.parentMessageId;
            status = yankee != status;
            target = null;
            if(status) { _fun00002_ip = 1119; continue _fun00001 }
 791:
            sierra = _closure1_slot0;
            status = _closure1_slot2;
            status = status[variable41];
            status = sierra.bind(tangon)(status);
            status = status.PrivateThreadMode;
            status = status.Disabled;
            target = null;
            if(!(variable40 !== status)) { _fun00002_ip = 1119; continue _fun00001 }
 829:
            limora = _closure1_slot12;
            sierra = _closure1_slot6;
            status = {};
            whisks = sizing.optionPrivateThread;
            status['style'] = whisks;
            variable36 = _closure1_slot12;
            variable39 = _closure1_slot0;
            variable38 = _closure1_slot2;
            whisks = 21;
            whisks = variable38[whisks];
            whisks = variable39.bind(tangon)(whisks);
            quebec = whisks.TableSwitchRow;
            whisks = {'start': true, 'end': true};
            variable43 = variable38[variable42];
            variable43 = variable39.bind(tangon)(variable43);
            variable45 = variable43.intl;
            variable44 = variable45.string;
            variable43 = variable38[variable42];
            variable43 = variable39.bind(tangon)(variable43);
            variable43 = variable43.t;
            variable43 = variable43.Wy5RIS;
            variable43 = variable44.bind(variable45)(variable43);
            whisks['accessibilityHint'] = variable43;
            variable43 = variable38[variable41];
            variable43 = variable39.bind(tangon)(variable43);
            variable43 = variable43.PrivateThreadMode;
            variable43 = variable43.Enabled;
            variable43 = variable40 !== variable43;
            whisks['disabled'] = variable43;
            variable43 = variable38[variable42];
            variable43 = variable39.bind(tangon)(variable43);
            variable45 = variable43.intl;
            variable44 = variable45.string;
            variable43 = variable38[variable42];
            variable43 = variable39.bind(tangon)(variable43);
            variable43 = variable43.t;
            variable43 = variable43.F1zyvb;
            variable43 = variable44.bind(variable45)(variable43);
            whisks['label'] = variable43;
            variable43 = variable38[variable42];
            variable43 = variable39.bind(tangon)(variable43);
            variable44 = variable43.intl;
            variable43 = variable44.string;
            variable42 = variable38[variable42];
            variable42 = variable39.bind(tangon)(variable42);
            variable42 = variable42.t;
            variable42 = variable42.Wy5RIS;
            variable42 = variable43.bind(variable44)(variable42);
            whisks['subLabel'] = variable42;
            variable38 = variable38[variable41];
            variable39 = variable39.bind(tangon)(variable38);
            variable38 = variable39.getIsPrivate;
            variable38 = variable38.bind(variable39)(equals, variable40);
            whisks['value'] = variable38;
            variable37 = function(argFoo) { // Original name: onValueChange
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
            whisks['onValueChange'] = variable37;
            whisks = variable36.bind(tangon)(quebec, whisks);
            status['children'] = whisks;
            target = limora.bind(tangon)(sierra, status);
 1119:
            papara[3] = target;
            config['children'] = papara;
            record = cntext.bind(tangon)(record, config);
            config = new Array(2);
            config[0] = record;
            record = equals.parentMessageId;
            cntext = yankee != record;
            record = null;
            if(!cntext) { _fun00002_ip = 1284; continue _fun00001 }
 1159:
            target = _closure1_slot13;
            papara = _closure1_slot6;
            cntext = {};
            status = sizing.parentMessageContainer;
            cntext['style'] = status;
            limora = _closure1_slot12;
            sierra = _closure1_slot6;
            status = {};
            whisks = sizing.border;
            status['style'] = whisks;
            sierra = limora.bind(tangon)(sierra, status);
            status = new Array(2);
            status[0] = sierra;
            whisks = _closure1_slot12;
            limora = _closure1_slot0;
            quebec = _closure1_slot2;
            sierra = 22;
            sierra = quebec[sierra];
            sierra = limora.bind(tangon)(sierra);
            limora = sierra.ThreadCreationStarterMessage;
            sierra = {};
            quebec = foxtra.id;
            sierra['channelId'] = quebec;
            equals = equals.parentMessageId;
            sierra['messageId'] = equals;
            sierra = whisks.bind(tangon)(limora, sierra);
            status[1] = sierra;
            cntext['children'] = status;
            record = target.bind(tangon)(papara, cntext);
 1284:
            config[1] = record;
            ctrled['children'] = config;
            ctrled = sequen.bind(tangon)(vacuum, ctrled);
            romeon['children'] = ctrled;
            romeon = source.bind(tangon)(kiloes, romeon);
            verify[1] = romeon;
            romeon = foxtra.rateLimitPerUser;
            romeon = romeon > backup;
            yankee = null;
            if(!romeon) { _fun00002_ip = 1420; continue _fun00001 }
 1327:
            kiloes = _closure1_slot12;
            backup = _closure1_slot6;
            romeon = {};
            sizing = sizing.typingWrapper;
            romeon['style'] = sizing;
            ctrled = _closure1_slot12;
            source = _closure1_slot1;
            vacuum = _closure1_slot2;
            sizing = 23;
            sizing = vacuum[sizing];
            source = source.bind(tangon)(sizing);
            sizing = {};
            vacuum = foxtra.id;
            sizing['channelId'] = vacuum;
            vacuum = false;
            sizing['hasTypingText'] = vacuum;
            vacuum = _closure1_slot9;
            vacuum = vacuum.CreateThread;
            sizing['slowmodeType'] = vacuum;
            sizing = ctrled.bind(tangon)(source, sizing);
            romeon['children'] = sizing;
            yankee = kiloes.bind(tangon)(backup, romeon);
 1420:
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