// app/modules/threads/native/components/thread_creation/CreateThreadView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    foxtrot = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtrot;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: CreateThreadViewInner
        _fun112212: for(var _fun112212_ip = 0; ; ) switch(_fun112212_ip) {
 0:
            entity = argFoo;
            variable37 = entity.threadSettingsDraft;
            var _closure2_slot0 = variable37;
            foxtrot = entity.parentChannel;
            var _closure2_slot1 = foxtrot;
            echo = entity.screenIndex;
            entity = _closure1_slot15;
            tango = undefined;
            sizing = entity.bind(tango)();
            variable47 = _closure1_slot0;
            variable38 = _closure1_slot2;
            variable44 = 10;
            entity = variable38[variable44];
            mike = variable47.bind(tango)(entity);
            entity = mike.usePrivateThreadMode;
            variable43 = entity.bind(mike)(foxtrot);
            report = _closure1_slot5;
            zulu = report.useEffect;
            entity = foxtrot.id;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = function() {
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 11;
                    zulu = oscar[tango];
                    entity = undefined;
                    offset = report.bind(entity)(zulu);
                    verify = offset.clearDraft;
                    zulu = _closure2_slot1;
                    options = zulu.id;
                    golf = _closure1_slot8;
                    golf = golf.ThreadSettings;
                    golf = verify.bind(offset)(options, golf);
                    tango = oscar[tango];
                    report = report.bind(entity)(tango);
                    tango = report.clearDraft;
                    zulu = zulu.id;
                    mike = _closure1_slot8;
                    mike = mike.FirstThreadMessage;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                return entity;
            };
            entity = zulu.bind(report)(entity, mike);
            mike = _closure1_slot5;
            entity = mike.useState;
            yankee = null;
            zulu = entity.bind(mike)(yankee);
            mike = _closure1_slot4;
            entity = 2;
            mike = mike.bind(tango)(zulu, entity);
            backup = 0;
            variable36 = mike[backup];
            entity = 1;
            entity = mike[entity];
            mike = {};
            mike['parentChannel'] = foxtrot;
            mike['threadSettingsDraft'] = variable37;
            mike['privateThreadMode'] = variable43;
            mike['setNameError'] = entity;
            entity = function(argFoo) { // Original name: useSubmitForm
                _fun112215: for(var _fun112215_ip = 0; ; ) switch(_fun112215_ip) {
 0:
                    mike = argFoo;
                    report = mike.parentChannel;
                    var _closure3_slot0 = report;
                    golf = mike.threadSettingsDraft;
                    var _closure3_slot1 = golf;
                    yankee = mike.privateThreadMode;
                    options = mike.setNameError;
                    var _closure3_slot2 = options;
                    mike = undefined;
                    var _closure3_slot6 = mike;
                    oscar = _closure1_slot0;
                    romeo = _closure1_slot2;
                    tango = 27;
                    tango = romeo[tango];
                    oscar = oscar.bind(mike)(tango);
                    tango = oscar.useNavigation;
                    tango = tango.bind(oscar)();
                    var _closure3_slot3 = tango;
                    offset = _closure1_slot5;
                    verify = offset.useRef;
                    oscar = false;
                    oscar = verify.bind(offset)(oscar);
                    var _closure3_slot4 = oscar;
                    oscar = golf.parentMessageId;
                    offset = null;
                    backup = offset == oscar;
                    var _closure3_slot5 = backup;
                    foxtrot = _closure1_slot5;
                    verify = foxtrot.useCallback;
                    oscar = new Array(5);
                    oscar[0] = backup;
                    oscar[1] = tango;
                    tango = golf.location;
                    oscar[2] = tango;
                    tango = golf.parentMessageId;
                    oscar[3] = tango;
                    oscar[4] = report;
                    tango = function(argFoo) {
                        _fun112216: for(var _fun112216_ip = 0; ; ) switch(_fun112216_ip) {
 0:
                            report = argFoo;
                            mike = _closure3_slot1;
                            zulu = mike.location;
                            mike = 'Message Shortcut';
                            if(!(mike === zulu)) { _fun112216_ip = 235; continue _fun112216 }
 28:
                            zulu = _closure1_slot1;
                            tango = _closure1_slot2;
                            mike = 28;
                            mike = tango[mike];
                            verify = undefined;
                            oscar = zulu.bind(verify)(mike);
                            tango = oscar.track;
                            mike = _closure1_slot11;
                            zulu = mike.MESSAGE_SHORTCUT_ACTION_SENT;
                            mike = {};
                            options = _closure3_slot0;
                            offset = options.id;
                            mike['channel_id'] = offset;
                            foxtrot = null;
                            offset = foxtrot == options;
                            options = undefined;
                            if(offset) { _fun112216_ip = 103; continue _fun112216 }
 94:
                            offset = _closure3_slot0;
                            options = offset.guild_id;
 103:
                            mike['guild_id'] = options;
                            options = _closure3_slot1;
                            options = options.parentMessageId;
                            mike['original_message_id'] = options;
                            options = 'thread';
                            mike['action'] = options;
                            yankee = _closure1_slot0;
                            options = _closure1_slot2;
                            offset = 29;
                            options = options[offset];
                            romeo = yankee.bind(verify)(options);
                            yankee = romeo.collectGuildAnalyticsMetadata;
                            options = _closure3_slot0;
                            foxtrot = foxtrot == options;
                            options = undefined;
                            if(foxtrot) { _fun112216_ip = 178; continue _fun112216 }
 169:
                            foxtrot = _closure3_slot0;
                            options = foxtrot.guild_id;
 178:
                            backup = yankee.bind(romeo)(options);
                            kilo = mike;
                            options = copyDataProperties(kilo, backup);
                            options = _closure1_slot0;
                            golf = _closure1_slot2;
                            golf = golf[offset];
                            verify = options.bind(verify)(golf);
                            options = verify.collectChannelAnalyticsMetadata;
                            golf = _closure3_slot0;
                            backup = options.bind(verify)(golf);
                            kilo = mike;
                            golf = copyDataProperties(kilo, backup);
                            mike = tango.bind(oscar)(zulu, mike);
 235:
                            zulu = _closure3_slot3;
                            mike = null;
                            if(!(mike == zulu)) { _fun112216_ip = 301; continue _fun112216 }
 245:
                            mike = _closure3_slot5;
                            if(!mike) { _fun112216_ip = 363; continue _fun112216 }
 252:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 30;
                            zulu = zulu[mike];
                            mike = undefined;
                            oscar = tango.bind(mike)(zulu);
                            tango = oscar.transitionToGuild;
                            zulu = report.guild_id;
                            mike = report.id;
                            mike = tango.bind(oscar)(zulu, mike);
                            _fun112216_ip = 363; continue _fun112216;
 301:
                            zulu = _closure3_slot3;
                            mike = zulu.navigate;
                            entity = {'name': 'channel', 'key': 'new-thread', 'params': null, 'merge': true};
                            tango = {};
                            oscar = report.guild_id;
                            tango['guildId'] = oscar;
                            report = report.id;
                            tango['channelId'] = report;
                            report = false;
                            tango['showCreateThread'] = report;
                            entity['params'] = tango;
                            entity = mike.bind(zulu)(entity);
 363:
                            entity = undefined;
                            return entity;
                        }
                    };
                    verify = verify.bind(foxtrot)(tango, oscar);
                    oscar = _closure1_slot1;
                    tango = 31;
                    tango = romeo[tango];
                    oscar = oscar.bind(mike)(tango);
                    tango = {};
                    tango['parentChannel'] = report;
                    romeo = golf.parentMessageId;
                    tango['parentMessageId'] = romeo;
                    tango['threadSettings'] = golf;
                    tango['privateThreadMode'] = yankee;
                    yankee = golf.location;
                    romeo = offset != yankee;
                    offset = '(unknown)';
                    if(!romeo) { _fun112215_ip = 242; continue _fun112215 }
 239:
                    offset = yankee;
 242:
                    tango['location'] = offset;
                    tango['onThreadCreated'] = verify;
                    oscar = oscar.bind(mike)(tango);
                    _closure3_slot6 = oscar;
                    tango = _closure1_slot5;
                    zulu = tango.useCallback;
                    entity = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo, argBar) {
                            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                                _fun112219: for(var _fun112219_ip = 0; ; ) switch(_fun112219_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(mike) { _fun112219_ip = 384; continue _fun112219 }
 10:
                                    options = argFoo;
                                    oscar = argBar;
                                    mike = undefined;
                                    report = undefined;
                                    golf = _closure3_slot4;
                                    golf = golf.current;
                                    if(golf) { _fun112219_ip = 381; continue _fun112219 }
 38:
                                    verify = _closure3_slot4;
                                    golf = true;
                                    verify['current'] = golf;
                                    verify = _closure3_slot2;
                                    golf = null;
                                    verify = verify.bind(mike)(golf);
 61: // try_start_0
                                    verify = _closure3_slot1;
                                    verify = verify.name;
                                    if(!(golf != verify)) { _fun112219_ip = 174; continue _fun112219 }
 74:
                                    verify = _closure3_slot1;
                                    verify = verify.name;
                                    romeo = '';
                                    if(!(romeo !== verify)) { _fun112219_ip = 174; continue _fun112219 }
 91:
                                    verify = _closure3_slot6;
                                    oscar = verify.bind(mike)(options, oscar);
                                    SaveGenerator(address=105);
 103:
                                    return oscar;
 105:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                                    if(options) { _fun112219_ip = 171; continue _fun112219 }
 111:
                                    offset = _closure1_slot1;
                                    yankee = _closure1_slot2;
                                    verify = 11;
                                    verify = yankee[verify];
                                    yankee = offset.bind(mike)(verify);
                                    offset = yankee.saveDraft;
                                    verify = _closure3_slot0;
                                    verify = verify.id;
                                    options = _closure1_slot8;
                                    options = options.FirstThreadMessage;
                                    options = offset.bind(yankee)(verify, romeo, options);
 166: // try_end0
                                    _fun112219_ip = 369; continue _fun112219;
 171:
                                    return oscar;
 174: // try_start_1
                                    offset = _closure3_slot2;
                                    options = _closure1_slot0;
                                    verify = _closure1_slot2;
                                    oscar = 32;
                                    oscar = verify[oscar];
                                    yankee = options.bind(mike)(oscar);
                                    oscar = yankee.makeEmptyTitleError;
                                    oscar = oscar.bind(yankee)();
                                    oscar = offset.bind(mike)(oscar);
                                    oscar = 33;
                                    oscar = verify[oscar];
                                    options = options.bind(mike)(oscar);
                                    oscar = options.dismissKeyboard;
                                    oscar = oscar.bind(options)();
                                    options = _closure3_slot4;
                                    oscar = false;
                                    options['current'] = oscar;
 250: // try_end1
                                    return mike;
 253: // catch_target0 // catch_target1
                                    CatchBlockStart(arg_register=5);
                                    tango = oscar;
                                    oscar = oscar.body;
                                    report = oscar;
                                    oscar = golf == oscar;
                                    golf = undefined;
                                    if(oscar) { _fun112219_ip = 280; continue _fun112219 }
 275:
                                    golf = report.code;
 280:
                                    report = _closure1_slot10;
                                    report = report.AUTOMOD_TITLE_BLOCKED;
                                    if(!(golf === report)) { _fun112219_ip = 369; continue _fun112219 }
 297:
                                    golf = _closure3_slot2;
                                    report = _closure1_slot0;
                                    oscar = _closure1_slot2;
                                    options = 32;
                                    options = oscar[options];
                                    offset = report.bind(mike)(options);
                                    verify = offset.makeAutomodViolationError;
                                    options = tango.body;
                                    tango = _closure3_slot0;
                                    tango = verify.bind(offset)(options, tango);
                                    tango = golf.bind(mike)(tango);
                                    tango = 33;
                                    tango = oscar[tango];
                                    report = report.bind(mike)(tango);
                                    tango = report.dismissKeyboard;
                                    tango = tango.bind(report)();
 369:
                                    tango = _closure3_slot4;
                                    zulu = false;
                                    tango['current'] = zulu;
 381:
                                    return mike;
 384:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure4_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure4_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    mike = entity.bind(mike)();
                    entity = new Array(4);
                    entity[0] = options;
                    golf = golf.name;
                    entity[1] = golf;
                    entity[2] = oscar;
                    entity[3] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            output = entity.bind(tango)(mike);
            equality = _closure1_slot1;
            entity = 12;
            mike = variable38[entity];
            zulu = equality.bind(tango)(mike);
            mike = 13;
            mike = variable38[mike];
            mike = equality.bind(tango)(mike);
            mike = mike.CREATE_THREAD;
            mike = zulu.bind(tango)(mike);
            report = mike.analyticsLocations;
            mike = 14;
            mike = variable38[mike];
            mike = equality.bind(tango)(mike);
            mike = mike.bind(tango)();
            verify = mike.bottom;
            mike = foxtrot.isForumLikeChannel;
            whiskey = mike.bind(foxtrot)();
            zulu = _closure1_slot5;
            mike = zulu.useRef;
            update = mike.bind(zulu)(yankee);
            zulu = _closure1_slot5;
            mike = zulu.useRef;
            result = mike.bind(zulu)(yankee);
            zulu = _closure1_slot13;
            entity = variable38[entity];
            entity = variable47.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot12;
            report = 15;
            report = variable38[report];
            oscar = equality.bind(tango)(report);
            report = {};
            options = true;
            report['absolute'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot13;
            oscar = 16;
            oscar = variable38[oscar];
            golf = equality.bind(tango)(oscar);
            oscar = {};
            romeo = sizing.container;
            oscar['style'] = romeo;
            verify = -verify;
            oscar['keyboardHeightOffset'] = verify;
            kilo = _closure1_slot12;
            romeo = _closure1_slot6;
            verify = {};
            source = sizing.expander;
            verify['style'] = source;
            romeo = kilo.bind(tango)(romeo, verify);
            verify = new Array(5);
            verify[0] = romeo;
            source = _closure1_slot12;
            kilo = _closure1_slot7;
            romeo = {};
            control = sizing.containerContent;
            romeo['style'] = control;
            sequence = _closure1_slot12;
            vacuum = _closure1_slot14;
            control = {};
            context = _closure1_slot13;
            record = _closure1_slot6;
            config = {};
            papa = sizing.options;
            config['style'] = papa;
            status = _closure1_slot13;
            target = _closure1_slot6;
            papa = {};
            sierra = sizing.optionsInner;
            papa['style'] = sierra;
            quebec = _closure1_slot12;
            lima = _closure1_slot6;
            sierra = {};
            variable39 = sizing.threadIconContainer;
            sierra['style'] = variable39;
            variable42 = _closure1_slot12;
            variable39 = 17;
            variable39 = variable38[variable39];
            variable39 = variable47.bind(tango)(variable39);
            variable41 = variable39.ThreadIcon;
            variable39 = {'color': 'white', 'size': 'lg'};
            variable39 = variable42.bind(tango)(variable41, variable39);
            sierra['children'] = variable39;
            lima = quebec.bind(tango)(lima, sierra);
            sierra = new Array(4);
            sierra[0] = lima;
            variable39 = _closure1_slot12;
            lima = 18;
            lima = variable38[lima];
            lima = variable47.bind(tango)(lima);
            quebec = lima.Text;
            lima = {'style': null, 'variant': 'text-xs/bold', 'color': 'interactive-normal'};
            variable41 = sizing.title;
            lima['style'] = variable41;
            variable45 = 19;
            variable41 = variable38[variable45];
            variable41 = variable47.bind(tango)(variable41);
            variable46 = variable41.intl;
            variable42 = variable46.string;
            variable41 = variable38[variable45];
            variable41 = variable47.bind(tango)(variable41);
            variable41 = variable41.t;
            variable41 = variable41.j3XWjI;
            variable42 = variable42.bind(variable46)(variable41);
            variable41 = variable42.toUpperCase;
            variable41 = variable41.bind(variable42)();
            lima['children'] = variable41;
            lima = variable39.bind(tango)(quebec, lima);
            sierra[1] = lima;
            quebec = _closure1_slot12;
            lima = 20;
            lima = variable38[lima];
            equality = equality.bind(tango)(lima);
            lima = {};
            lima['ref'] = result;
            lima['chatInputRef'] = update;
            lima['threadSettingsDraft'] = variable37;
            lima['threadNameError'] = variable36;
            lima = quebec.bind(tango)(equality, lima);
            sierra[2] = lima;
            lima = null;
            if(whiskey) { _fun112212_ip = 1088; continue _fun112212 }
 744:
            whiskey = variable37.parentMessageId;
            whiskey = yankee != whiskey;
            lima = null;
            if(whiskey) { _fun112212_ip = 1088; continue _fun112212 }
 762:
            equality = _closure1_slot0;
            whiskey = _closure1_slot2;
            whiskey = whiskey[variable44];
            whiskey = equality.bind(tango)(whiskey);
            whiskey = whiskey.PrivateThreadMode;
            whiskey = whiskey.Disabled;
            lima = null;
            if(!(variable43 !== whiskey)) { _fun112212_ip = 1088; continue _fun112212 }
 800:
            quebec = _closure1_slot12;
            equality = _closure1_slot6;
            whiskey = {};
            variable36 = sizing.optionPrivateThread;
            whiskey['style'] = variable36;
            variable39 = _closure1_slot12;
            variable42 = _closure1_slot0;
            variable41 = _closure1_slot2;
            variable36 = 21;
            variable36 = variable41[variable36];
            variable36 = variable42.bind(tango)(variable36);
            variable38 = variable36.TableSwitchRow;
            variable36 = {'start': true, 'end': true};
            variable46 = variable41[variable45];
            variable46 = variable42.bind(tango)(variable46);
            variable48 = variable46.intl;
            variable47 = variable48.string;
            variable46 = variable41[variable45];
            variable46 = variable42.bind(tango)(variable46);
            variable46 = variable46.t;
            variable46 = variable46.Wy5RIS;
            variable46 = variable47.bind(variable48)(variable46);
            variable36['accessibilityHint'] = variable46;
            variable46 = variable41[variable44];
            variable46 = variable42.bind(tango)(variable46);
            variable46 = variable46.PrivateThreadMode;
            variable46 = variable46.Enabled;
            variable46 = variable43 !== variable46;
            variable36['disabled'] = variable46;
            variable46 = variable41[variable45];
            variable46 = variable42.bind(tango)(variable46);
            variable48 = variable46.intl;
            variable47 = variable48.string;
            variable46 = variable41[variable45];
            variable46 = variable42.bind(tango)(variable46);
            variable46 = variable46.t;
            variable46 = variable46.F1zyvb;
            variable46 = variable47.bind(variable48)(variable46);
            variable36['label'] = variable46;
            variable46 = variable41[variable45];
            variable46 = variable42.bind(tango)(variable46);
            variable47 = variable46.intl;
            variable46 = variable47.string;
            variable45 = variable41[variable45];
            variable45 = variable42.bind(tango)(variable45);
            variable45 = variable45.t;
            variable45 = variable45.Wy5RIS;
            variable45 = variable46.bind(variable47)(variable45);
            variable36['subLabel'] = variable45;
            variable41 = variable41[variable44];
            variable42 = variable42.bind(tango)(variable41);
            variable41 = variable42.getIsPrivate;
            variable41 = variable41.bind(variable42)(variable37, variable43);
            variable36['value'] = variable41;
            variable40 = function(argFoo) { // Original name: onValueChange
                _fun112221: for(var _fun112221_ip = 0; ; ) switch(_fun112221_ip) {
 0:
                    entity = _closure2_slot0;
                    tango = entity.parentChannelId;
                    entity = null;
                    if(!(entity != tango)) { _fun112221_ip = 66; continue _fun112221 }
 19:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.changeThreadSettings;
                    entity = {};
                    report = argFoo;
                    entity['isPrivate'] = report;
                    entity = mike.bind(zulu)(tango, entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            variable36['onValueChange'] = variable40;
            variable36 = variable39.bind(tango)(variable38, variable36);
            whiskey['children'] = variable36;
            lima = quebec.bind(tango)(equality, whiskey);
 1088:
            sierra[3] = lima;
            papa['children'] = sierra;
            target = status.bind(tango)(target, papa);
            papa = new Array(2);
            papa[0] = target;
            target = variable37.parentMessageId;
            status = yankee != target;
            target = null;
            if(!status) { _fun112212_ip = 1253; continue _fun112212 }
 1128:
            lima = _closure1_slot13;
            sierra = _closure1_slot6;
            status = {};
            whiskey = sizing.parentMessageContainer;
            status['style'] = whiskey;
            quebec = _closure1_slot12;
            equality = _closure1_slot6;
            whiskey = {};
            variable36 = sizing.border;
            whiskey['style'] = variable36;
            equality = quebec.bind(tango)(equality, whiskey);
            whiskey = new Array(2);
            whiskey[0] = equality;
            variable36 = _closure1_slot12;
            quebec = _closure1_slot0;
            variable38 = _closure1_slot2;
            equality = 22;
            equality = variable38[equality];
            equality = quebec.bind(tango)(equality);
            quebec = equality.ThreadCreationStarterMessage;
            equality = {};
            variable38 = foxtrot.id;
            equality['channelId'] = variable38;
            variable37 = variable37.parentMessageId;
            equality['messageId'] = variable37;
            equality = variable36.bind(tango)(quebec, equality);
            whiskey[1] = equality;
            status['children'] = whiskey;
            target = lima.bind(tango)(sierra, status);
 1253:
            papa[1] = target;
            config['children'] = papa;
            config = context.bind(tango)(record, config);
            control['children'] = config;
            control = sequence.bind(tango)(vacuum, control);
            romeo['children'] = control;
            romeo = source.bind(tango)(kilo, romeo);
            verify[1] = romeo;
            romeo = foxtrot.rateLimitPerUser;
            romeo = romeo > backup;
            yankee = null;
            if(!romeo) { _fun112212_ip = 1399; continue _fun112212 }
 1306:
            kilo = _closure1_slot12;
            backup = _closure1_slot6;
            romeo = {};
            sizing = sizing.typingWrapper;
            romeo['style'] = sizing;
            control = _closure1_slot12;
            source = _closure1_slot1;
            vacuum = _closure1_slot2;
            sizing = 23;
            sizing = vacuum[sizing];
            source = source.bind(tango)(sizing);
            sizing = {};
            vacuum = foxtrot.id;
            sizing['channelId'] = vacuum;
            vacuum = false;
            sizing['hasTypingText'] = vacuum;
            vacuum = _closure1_slot9;
            vacuum = vacuum.CreateThread;
            sizing['slowmodeType'] = vacuum;
            sizing = control.bind(tango)(source, sizing);
            romeo['children'] = sizing;
            yankee = kilo.bind(tango)(backup, romeo);
 1399:
            verify[2] = yankee;
            sizing = _closure1_slot12;
            yankee = _closure1_slot1;
            backup = _closure1_slot2;
            romeo = 24;
            romeo = backup[romeo];
            kilo = yankee.bind(tango)(romeo);
            romeo = {};
            romeo['ref'] = update;
            romeo['channel'] = foxtrot;
            romeo['screenIndex'] = echo;
            romeo['secondaryTextFieldRef'] = result;
            romeo['threadCreationCallback'] = output;
            romeo = sizing.bind(tango)(kilo, romeo);
            verify[3] = romeo;
            romeo = _closure1_slot12;
            offset = 25;
            offset = backup[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            foxtrot = foxtrot.id;
            offset['channelId'] = foxtrot;
            offset = romeo.bind(tango)(yankee, offset);
            verify[4] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    kilo = 0;
    tango = oscar[kilo];
    entity = undefined;
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot3 = tango;
    yankee = 1;
    tango = oscar[yankee];
    tango = foxtrot.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    backup = tango.StyleSheet;
    options = tango.View;
    var _closure1_slot6 = options;
    tango = tango.ScrollView;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SlowmodeType;
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AbortCodes;
    var _closure1_slot10 = options;
    tango = tango.AnalyticEvents;
    var _closure1_slot11 = tango;
    tango = 7;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot12 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot13 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot14 = tango;
    tango = 8;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = 9;
    sizing = oscar[romeo];
    sizing = foxtrot.bind(entity)(sizing);
    sizing = sizing.colors;
    sizing = sizing.BG_BASE_PRIMARY;
    offset['backgroundColor'] = sizing;
    offset['flex'] = yankee;
    tango['container'] = offset;
    offset = {};
    offset['flexGrow'] = kilo;
    tango['containerContent'] = offset;
    offset = {};
    offset['flex'] = yankee;
    tango['expander'] = offset;
    offset = {'height': 1, 'backgroundColor': null, 'alignSelf': 'stretch', 'marginBottom': 16};
    yankee = oscar[romeo];
    yankee = foxtrot.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    yankee = 16;
    tango['border'] = offset;
    offset = {};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_16;
    offset['marginTop'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    offset['marginBottom'] = kilo;
    tango['title'] = offset;
    offset = {};
    kilo = 12;
    offset['marginHorizontal'] = kilo;
    tango['options'] = offset;
    offset = {};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_16;
    offset['paddingBottom'] = kilo;
    tango['optionsInner'] = offset;
    offset = {};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_8;
    offset['paddingTop'] = kilo;
    tango['optionPrivateThread'] = offset;
    offset = {};
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_64;
    offset['width'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_64;
    offset['height'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.spacing;
    kilo = kilo.PX_16;
    offset['marginTop'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.radii;
    kilo = kilo.xxl;
    offset['borderRadius'] = kilo;
    kilo = oscar[romeo];
    kilo = foxtrot.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_ACCENT;
    offset['backgroundColor'] = kilo;
    kilo = 'center';
    offset['justifyContent'] = kilo;
    offset['alignItems'] = kilo;
    tango['threadIconContainer'] = offset;
    offset = {};
    backup = backup.hairlineWidth;
    offset['borderBottomWidth'] = backup;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_16;
    offset['paddingHorizontal'] = backup;
    backup = oscar[romeo];
    backup = foxtrot.bind(entity)(backup);
    backup = backup.spacing;
    backup = backup.PX_4;
    offset['paddingVertical'] = backup;
    backup = 'flex-end';
    offset['justifyContent'] = backup;
    backup = 'row';
    offset['flexDirection'] = backup;
    romeo = oscar[romeo];
    romeo = foxtrot.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.CHAT_BORDER;
    offset['borderColor'] = romeo;
    tango['typingWrapper'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tango['parentMessageContainer'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot15 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun112222: for(var _fun112222_ip = 0; ; ) switch(_fun112222_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            golf = entity.screenIndex;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 26;
            entity = report[entity];
            report = undefined;
            entity = tango.bind(report)(entity);
            oscar = entity.bind(report)(zulu);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun112222_ip = 96; continue _fun112222 }
 53:
            tango = _closure1_slot12;
            zulu = _closure1_slot16;
            mike = {};
            options = oscar.parentChannel;
            mike['parentChannel'] = options;
            mike['screenIndex'] = golf;
            oscar = oscar.threadSettingsDraft;
            mike['threadSettingsDraft'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 96:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 34;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/native/components/thread_creation/CreateThreadView.tsx';
    tango = report.bind(oscar)(tango);
    zulu['CreateThreadView'] = mike;
    return entity;
})();