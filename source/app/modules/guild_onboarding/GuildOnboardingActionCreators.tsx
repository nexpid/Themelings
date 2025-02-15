// app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    offset = function(argFoo) { // Original name: _updateOnboardingResponses
        _fun61357: for(var _fun61357_ip = 0; ; ) switch(_fun61357_ip) {
 0:
            yankee = argFoo;
            mike = arguments[1];
            var _closure2_slot0 = yankee;
            entity = undefined;
            if(!(mike === entity)) { _fun61357_ip = 20; continue _fun61357 }
 18:
            mike = false;
 20:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            report = _closure1_slot5;
            tango = report.isFullServerPreview;
            tango = tango.bind(report)(yankee);
            if(tango) { _fun61357_ip = 400; continue _fun61357 }
 56:
            report = _closure1_slot9;
            if(mike) { _fun61357_ip = 76; continue _fun61357 }
 63:
            tango = report.getOnboardingPrompts;
            oscar = tango.bind(report)(yankee);
            _fun61357_ip = 87; continue _fun61357;
 76:
            tango = report.getOnboardingPromptsForOnboarding;
            oscar = tango.bind(report)(yankee);
 87:
            report = _closure1_slot9;
            tango = report.getOnboardingResponses;
            tango = tango.bind(report)(yankee);
            _closure2_slot1 = tango;
            report = oscar.map;
            tango = function(argFoo) {
                entity = argFoo;
                zulu = entity.options;
                mike = zulu.filter;
                entity = function(argFoo) {
                    zulu = _closure2_slot1;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = report.bind(oscar)(tango);
            tango = report.flat;
            romeo = tango.bind(report)();
            verify = {};
            _closure2_slot2 = verify;
            options = {};
            _closure2_slot3 = options;
            report = oscar.forEach;
            tango = function(argFoo) {
                entity = argFoo;
                tango = _closure2_slot2;
                zulu = entity.id;
                mike = global;
                report = mike.Date;
                mike = report.now;
                mike = mike.bind(report)();
                tango[zulu] = mike;
                zulu = entity.options;
                mike = zulu.forEach;
                entity = function(argFoo) {
                    zulu = _closure2_slot3;
                    entity = argFoo;
                    mike = entity.id;
                    entity = global;
                    tango = entity.Date;
                    entity = tango.now;
                    entity = entity.bind(tango)();
                    zulu[mike] = entity;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            tango = report.bind(oscar)(tango);
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 10;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.HTTP;
            if(mike) { _fun61357_ip = 293; continue _fun61357 }
 186:
            tango = oscar.put;
            mike = {};
            offset = _closure1_slot12;
            report = offset.GUILD_ONBOARDING_RESPONSES;
            report = report.bind(offset)(yankee);
            mike['url'] = report;
            report = {};
            foxtrot = romeo.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            offset = foxtrot.bind(romeo)(offset);
            report['onboarding_responses'] = offset;
            report['onboarding_prompts_seen'] = verify;
            report['onboarding_responses_seen'] = options;
            mike['body'] = report;
            report = false;
            mike['rejectWithError'] = report;
            report = tango.bind(oscar)(mike);
            tango = report.then;
            mike = function(argFoo) {
                _fun61366: for(var _fun61366_ip = 0; ; ) switch(_fun61366_ip) {
 0:
                    tango = argFoo;
                    mike = tango.body;
                    entity = null;
                    if(!(entity != mike)) { _fun61366_ip = 119; continue _fun61366 }
 14:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    report = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    entity['type'] = report;
                    report = _closure2_slot0;
                    entity['guildId'] = report;
                    report = tango.body;
                    report = report.onboarding_responses;
                    entity['options'] = report;
                    report = tango.body;
                    report = report.onboarding_prompts_seen;
                    entity['prompts_seen'] = report;
                    tango = tango.body;
                    tango = tango.onboarding_responses_seen;
                    entity['options_seen'] = tango;
                    entity = mike.bind(zulu)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            report = tango.bind(report)(mike);
            tango = report.catch;
            mike = function(argFoo) {
                report = argFoo;
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.captureException;
                mike = global;
                golf = mike.Error;
                offset = _closure2_slot0;
                verify = report.statusCode;
                mike = mike.HermesInternal;
                options = mike.concat;
                oscar = 'Failed to update onboarding responses for guild ';
                mike = ': ';
                foxtrot = options.bind(oscar)(offset, mike, verify);
                mike = {};
                mike['cause'] = report;
                report = golf.prototype;
                report = Object.create(report, {constructor: {value: golf}});
                backup = report;
                romeo = mike;
                mike = new backup[golf](foxtrot, romeo, yankee);
                mike = mike instanceof Object ? mike : report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = tango.bind(report)(mike);
            _fun61357_ip = 398; continue _fun61357;
 293:
            report = oscar.post;
            tango = {};
            offset = _closure1_slot12;
            golf = offset.GUILD_ONBOARDING_RESPONSES;
            golf = golf.bind(offset)(yankee);
            tango['url'] = golf;
            golf = {};
            yankee = romeo.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            offset = yankee.bind(romeo)(offset);
            golf['onboarding_responses'] = offset;
            golf['onboarding_prompts_seen'] = verify;
            golf['onboarding_responses_seen'] = options;
            tango['body'] = golf;
            golf = true;
            tango['rejectWithError'] = golf;
            oscar = report.bind(oscar)(tango);
            report = oscar.then;
            tango = function(argFoo) {
                _fun61363: for(var _fun61363_ip = 0; ; ) switch(_fun61363_ip) {
 0:
                    tango = argFoo;
                    mike = tango.body;
                    entity = null;
                    if(!(entity != mike)) { _fun61363_ip = 119; continue _fun61363 }
 14:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 11;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.dispatch;
                    entity = {};
                    report = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    entity['type'] = report;
                    report = _closure2_slot0;
                    entity['guildId'] = report;
                    report = tango.body;
                    report = report.onboarding_responses;
                    entity['options'] = report;
                    report = tango.body;
                    report = report.onboarding_prompts_seen;
                    entity['prompts_seen'] = report;
                    tango = tango.body;
                    tango = tango.onboarding_responses_seen;
                    entity['options_seen'] = tango;
                    entity = mike.bind(zulu)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            report = report.bind(oscar)(tango);
            tango = report.catch;
            zulu = function(argFoo) {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 12;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.captureException;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu);
 398:
            return mike;
 400:
            return entity;
        }
    };
    var _closure1_slot15 = offset;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot8 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    golf = mike.AnalyticEvents;
    var _closure1_slot10 = golf;
    golf = mike.AnalyticsPages;
    var _closure1_slot11 = golf;
    mike = mike.Endpoints;
    var _closure1_slot12 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildMemberFlags;
    var _closure1_slot13 = mike;
    mike = 9;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.ReadStateTypes;
    var _closure1_slot14 = mike;
    mike = {};
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: selectOption
        _fun61368: for(var _fun61368_ip = 0; ; ) switch(_fun61368_ip) {
 0:
            oscar = argBar;
            report = argBaz;
            zulu = _closure1_slot9;
            mike = zulu.getOnboardingPrompt;
            mike = mike.bind(zulu)(oscar);
            zulu = null;
            if(!(zulu != mike)) { _fun61368_ip = 183; continue _fun61368 }
 33:
            zulu = mike.singleSelect;
            if(zulu) { _fun61368_ip = 48; continue _fun61368 }
 42:
            tango = new Array(0);
            _fun61368_ip = 111; continue _fun61368;
 48:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 14;
            zulu = yankee[options];
            verify = undefined;
            golf = offset.bind(verify)(zulu);
            zulu = golf.without;
            options = yankee[options];
            offset = offset.bind(verify)(options);
            verify = offset.map;
            options = mike.options;
            mike = 'id';
            mike = verify.bind(offset)(options, mike);
            tango = zulu.bind(golf)(mike, report);
 111:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            golf = 'GUILD_ONBOARDING_SELECT_OPTION';
            entity['type'] = golf;
            golf = argFoo;
            entity['guildId'] = golf;
            entity['promptId'] = oscar;
            entity['optionId'] = report;
            report = argCorge;
            entity['selected'] = report;
            entity['removedOptionIds'] = tango;
            entity = mike.bind(zulu)(entity);
 183:
            entity = undefined;
            return entity;
        }
    };
    mike['selectOption'] = golf;
    golf = 14;
    golf = oscar[golf];
    verify = options.bind(entity)(golf);
    options = verify.debounce;
    golf = 1000;
    golf = options.bind(verify)(offset, golf);
    mike['updateOnboardingResponses'] = golf;
    golf = function(argFoo, argBar, argBaz) { // Original name: updateRolesLocal
        _fun61369: for(var _fun61369_ip = 0; ; ) switch(_fun61369_ip) {
 0:
            report = argFoo;
            yankee = argBar;
            options = argBaz;
            zulu = _closure1_slot7;
            entity = zulu.getSelfMember;
            tango = entity.bind(zulu)(report);
            zulu = null;
            oscar = zulu == tango;
            entity = undefined;
            offset = undefined;
            if(oscar) { _fun61369_ip = 46; continue _fun61369 }
 40:
            offset = tango.roles;
 46:
            if(!(zulu == offset)) { _fun61369_ip = 54; continue _fun61369 }
 50:
            offset = new Array(0);
 54:
            tango = _closure1_slot5;
            zulu = tango.isViewingRoles;
            zulu = zulu.bind(tango)(report);
            if(zulu) { _fun61369_ip = 210; continue _fun61369 }
 75:
            zulu = yankee.length;
            oscar = 0;
            zulu = zulu > oscar;
            if(zulu) { _fun61369_ip = 98; continue _fun61369 }
 89:
            tango = options.length;
            zulu = tango > oscar;
 98:
            if(!zulu) { _fun61369_ip = 291; continue _fun61369 }
 104:
            foxtrot = _closure1_slot1;
            backup = _closure1_slot2;
            zulu = 11;
            zulu = backup[zulu];
            oscar = foxtrot.bind(entity)(zulu);
            tango = oscar.dispatch;
            zulu = {};
            golf = 'GUILD_MEMBER_UPDATE_LOCAL';
            zulu['type'] = golf;
            zulu['guildId'] = report;
            golf = 14;
            verify = backup[golf];
            romeo = foxtrot.bind(entity)(verify);
            verify = romeo.difference;
            golf = backup[golf];
            foxtrot = foxtrot.bind(entity)(golf);
            golf = foxtrot.union;
            golf = golf.bind(foxtrot)(offset, yankee);
            golf = verify.bind(romeo)(golf, options);
            zulu['roles'] = golf;
            zulu['addedRoleIds'] = yankee;
            zulu['removedRoleIds'] = options;
            zulu = tango.bind(oscar)(zulu);
            _fun61369_ip = 291; continue _fun61369;
 210:
            tango = _closure1_slot0;
            romeo = _closure1_slot2;
            zulu = 13;
            zulu = romeo[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.updateImpersonatedRoles;
            verify = _closure1_slot1;
            mike = 14;
            oscar = romeo[mike];
            golf = verify.bind(entity)(oscar);
            oscar = golf.difference;
            mike = romeo[mike];
            verify = verify.bind(entity)(mike);
            mike = verify.union;
            mike = mike.bind(verify)(offset, yankee);
            mike = oscar.bind(golf)(mike, options);
            mike = zulu.bind(tango)(report, mike);
 291:
            return entity;
        }
    };
    mike['updateRolesLocal'] = golf;
    golf = function(argFoo, argBar) { // Original name: completeOnboarding
        _fun61370: for(var _fun61370_ip = 0; ; ) switch(_fun61370_ip) {
 0:
            report = argFoo;
            update = argBar;
            entity = update.length;
            oscar = 0;
            entity = entity > oscar;
            tango = null;
            echo = null;
            if(!entity) { _fun61370_ip = 42; continue _fun61370 }
 26:
            mike = update.length;
            entity = 1;
            entity = mike - entity;
            echo = update[entity];
 42:
            mike = _closure1_slot9;
            entity = mike.getSelectedOptions;
            control = entity.bind(mike)(report);
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            offset = 15;
            options = mike[offset];
            entity = undefined;
            verify = zulu.bind(entity)(options);
            options = verify.getSelectedRoleIds;
            romeo = options.bind(verify)(control);
            mike = mike[offset];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.getSelectedChannelIds;
            mike = mike.bind(zulu)(control);
            options = _closure1_slot9;
            zulu = options.getEnabled;
            zulu = zulu.bind(options)(report);
            if(zulu) { _fun61370_ip = 139; continue _fun61370 }
 133:
            verify = new Array(0);
            _fun61370_ip = 154; continue _fun61370;
 139:
            options = _closure1_slot9;
            zulu = options.getDefaultChannelIds;
            verify = zulu.bind(options)(report);
 154:
            zulu = _closure1_slot0;
            options = _closure1_slot2;
            offset = options[offset];
            yankee = zulu.bind(entity)(offset);
            offset = yankee.getChannelCoverageForOnboarding;
            backup = offset.bind(yankee)(report, update, verify);
            yankee = _closure1_slot4;
            offset = 2;
            offset = yankee.bind(entity)(backup, offset);
            result = offset[oscar];
            source = 1;
            sizing = offset[source];
            kilo = new Array(0);
            target = kilo;
            papa = mike;
            context = 0;
            context = arraySpread(target, papa, context);
            target = kilo;
            papa = verify;
            mike = arraySpread(target, papa, context);
            verify = kilo.map;
            mike = function(argFoo) {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = verify.bind(kilo)(mike);
            verify = offset.filter;
            mike = 16;
            mike = options[mike];
            mike = zulu.bind(entity)(mike);
            mike = mike.isNotNullish;
            context = verify.bind(offset)(mike);
            mike = 17;
            mike = options[mike];
            verify = zulu.bind(entity)(mike);
            options = verify.getFlattenedChannels;
            zulu = global;
            mike = zulu.Set;
            yankee = mike.prototype;
            yankee = Object.create(yankee, {constructor: {value: mike}});
            status = yankee;
            target = kilo;
            mike = new status[mike](target, papa);
            papa = mike instanceof Object ? mike : yankee;
            yankee = true;
            status = verify;
            target = report;
            record = true;
            mike = status[options](target, papa, context, record, config);
            output = mike.length;
            if(!(tango != echo)) { _fun61370_ip = 371; continue _fun61370 }
 349:
            verify = echo.options;
            options = verify.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = options.bind(verify)(mike);
            _fun61370_ip = 375; continue _fun61370;
 371:
            backup = new Array(0);
 375:
            var _closure2_slot0 = backup;
            options = _closure1_slot1;
            config = _closure1_slot2;
            mike = 18;
            mike = config[mike];
            offset = options.bind(entity)(mike);
            verify = offset.track;
            mike = _closure1_slot10;
            options = mike.GUILD_ONBOARDING_STEP_COMPLETED;
            mike = {};
            sequence = _closure1_slot0;
            vacuum = 19;
            vacuum = config[vacuum];
            sequence = sequence.bind(entity)(vacuum);
            vacuum = sequence.collectGuildAnalyticsMetadata;
            papa = vacuum.bind(sequence)(report);
            target = mike;
            vacuum = copyDataProperties(target, papa);
            update = update.length;
            source = update - source;
            update = 'step';
            mike[update] = source;
            echo = tango == echo;
            update = 0;
            if(echo) { _fun61370_ip = 497; continue _fun61370 }
 477:
            source = control.filter;
            echo = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = source.bind(control)(echo);
            update = echo.length;
 497:
            echo = 'options_selected';
            mike[echo] = update;
            backup = backup.length;
            echo = backup > oscar;
            backup = 'skipped';
            mike[backup] = echo;
            echo = false;
            backup = 'back';
            mike[backup] = echo;
            backup = 'in_onboarding';
            mike[backup] = yankee;
            backup = 'is_final_step';
            mike[backup] = yankee;
            echo = romeo.size;
            backup = 'roles_granted';
            mike[backup] = echo;
            backup = 'channels_granted';
            mike[backup] = output;
            output = result.map;
            backup = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            output = output.bind(result)(backup);
            backup = 'guild_onboarding_covered_channel_ids';
            mike[backup] = output;
            backup = sizing.map;
            foxtrot = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = backup.bind(sizing)(foxtrot);
            foxtrot = 'guild_onboarding_uncovered_channel_ids';
            mike[foxtrot] = backup;
            mike = verify.bind(offset)(options, mike);
            options = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 20;
            mike = backup[mike];
            offset = options.bind(entity)(mike);
            verify = offset.ackGuildFeature;
            mike = _closure1_slot14;
            options = mike.GUILD_ONBOARDING_QUESTION;
            foxtrot = _closure1_slot1;
            mike = 21;
            mike = backup[mike];
            backup = foxtrot.bind(entity)(mike);
            foxtrot = backup.fromTimestamp;
            sizing = zulu.Date;
            mike = sizing.now;
            mike = mike.bind(sizing)();
            mike = foxtrot.bind(backup)(mike);
            mike = verify.bind(offset)(report, options, mike);
            mike = _closure1_slot15;
            mike = mike.bind(entity)(report, yankee);
            options = _closure1_slot5;
            mike = options.isFullServerPreview;
            mike = mike.bind(options)(report);
            if(!mike) { _fun61370_ip = 1004; continue _fun61370 }
 758:
            verify = _closure1_slot0;
            options = _closure1_slot2;
            mike = 13;
            offset = options[mike];
            backup = verify.bind(entity)(offset);
            foxtrot = backup.updateImpersonatedChannels;
            offset = new Array(0);
            offset = foxtrot.bind(backup)(report, kilo, offset);
            offset = options[mike];
            backup = verify.bind(entity)(offset);
            foxtrot = backup.updateImpersonatedData;
            offset = {};
            offset['optInEnabled'] = yankee;
            offset = foxtrot.bind(backup)(report, offset);
            options = options[mike];
            verify = verify.bind(entity)(options);
            options = verify.updateImpersonatedRoles;
            offset = zulu.Array;
            zulu = offset.from;
            zulu = zulu.bind(offset)(romeo);
            zulu = options.bind(verify)(report, zulu);
            options = _closure1_slot8;
            zulu = options.getCurrentUser;
            zulu = zulu.bind(options)();
            if(!(tango != zulu)) { _fun61370_ip = 1004; continue _fun61370 }
 880:
            verify = _closure1_slot7;
            options = verify.getMember;
            zulu = zulu.id;
            options = options.bind(verify)(report, zulu);
            verify = tango == options;
            zulu = undefined;
            if(verify) { _fun61370_ip = 915; continue _fun61370 }
 910:
            zulu = options.flags;
 915:
            tango = tango != zulu;
            offset = 0;
            if(!tango) { _fun61370_ip = 927; continue _fun61370 }
 924:
            offset = zulu;
 927:
            verify = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = romeo[mike];
            tango = verify.bind(entity)(mike);
            zulu = tango.updateImpersonatedData;
            mike = {};
            oscar = {};
            options = 22;
            options = romeo[options];
            verify = verify.bind(entity)(options);
            options = verify.setFlag;
            golf = _closure1_slot13;
            golf = golf.COMPLETED_ONBOARDING;
            golf = options.bind(verify)(offset, golf, yankee);
            oscar['flags'] = golf;
            mike['memberOptions'] = oscar;
            mike = zulu.bind(tango)(report, mike);
 1004:
            return entity;
        }
    };
    mike['completeOnboarding'] = golf;
    golf = function(argFoo, argBar) { // Original name: onboardExistingMember
        _fun61376: for(var _fun61376_ip = 0; ; ) switch(_fun61376_ip) {
 0:
            oscar = argFoo;
            mike = global;
            report = mike.Set;
            entity = report.prototype;
            tango = Object.create(entity, {constructor: {value: report}});
            romeo = argBar;
            foxtrot = tango;
            entity = new foxtrot[report](romeo, yankee);
            golf = entity instanceof Object ? entity : tango;
            var _closure2_slot0 = golf;
            report = _closure1_slot9;
            tango = report.getEnabled;
            tango = tango.bind(report)(oscar);
            if(tango) { _fun61376_ip = 67; continue _fun61376 }
 61:
            report = new Array(0);
            _fun61376_ip = 82; continue _fun61376;
 67:
            options = _closure1_slot9;
            tango = options.getDefaultChannelIds;
            report = tango.bind(options)(oscar);
 82:
            tango = report.forEach;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.add;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            tango = golf.size;
            zulu = 0;
            if(!(tango > zulu)) { _fun61376_ip = 184; continue _fun61376 }
 108:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 23;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.bulkOptInChannels;
            zulu = mike.Array;
            mike = zulu.from;
            yankee = mike.bind(zulu)(golf);
            mike = {};
            entity = _closure1_slot11;
            entity = entity.GUILD_ONBOARDING;
            mike['page'] = entity;
            offset = true;
            foxtrot = report;
            romeo = oscar;
            verify = mike;
            entity = foxtrot[tango](romeo, yankee, offset, verify, options);
 184:
            entity = undefined;
            return entity;
        }
    };
    mike['onboardExistingMember'] = golf;
    golf = function(argFoo) { // Original name: finishOnboarding
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_ONBOARDING_COMPLETE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['finishOnboarding'] = golf;
    golf = function(argFoo, argBar) { // Original name: setUserOnboardingStep
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 11;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_ONBOARDING_SET_STEP';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['step'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['setUserOnboardingStep'] = golf;
    tango = function(argFoo) { // Original name: resetOnboarding
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun61382: for(var _fun61382_ip = 0; ; ) switch(_fun61382_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun61382_ip = 188; continue _fun61382 }
 10:
                    zulu = _closure1_slot8;
                    mike = zulu.getCurrentUser;
                    zulu = mike.bind(zulu)();
                    tango = null;
                    if(!(tango != zulu)) { _fun61382_ip = 180; continue _fun61382 }
 35:
                    options = _closure1_slot7;
                    golf = options.getMember;
                    report = _closure2_slot0;
                    zulu = zulu.id;
                    report = golf.bind(options)(report, zulu);
                    golf = tango == report;
                    verify = undefined;
                    zulu = undefined;
                    if(golf) { _fun61382_ip = 79; continue _fun61382 }
 74:
                    zulu = report.flags;
 79:
                    tango = tango != zulu;
                    offset = 0;
                    if(!tango) { _fun61382_ip = 91; continue _fun61382 }
 88:
                    offset = zulu;
 91:
                    options = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zulu = 24;
                    zulu = yankee[zulu];
                    report = options.bind(verify)(zulu);
                    tango = report.updateGuildSelfMember;
                    zulu = _closure2_slot0;
                    mike = {};
                    golf = 22;
                    golf = yankee[golf];
                    verify = options.bind(verify)(golf);
                    options = verify.setFlag;
                    oscar = _closure1_slot13;
                    golf = oscar.COMPLETED_ONBOARDING;
                    oscar = false;
                    oscar = options.bind(verify)(offset, golf, oscar);
                    mike['flags'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    SaveGenerator(address=174);
 172:
                    return mike;
 174:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun61382_ip = 185; continue _fun61382 }
 180:
                    zulu = undefined;
                    return zulu;
 185:
                    return mike;
 188:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['resetOnboarding'] = tango;
    tango = 25;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_onboarding/GuildOnboardingActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();