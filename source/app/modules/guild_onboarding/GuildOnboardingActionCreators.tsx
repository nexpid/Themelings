// app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    offset = function(argFoo) { // Original name: _updateOnboardingResponses
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            michal = arguments[1];
            var _closure2_slot0 = yankee;
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            michal = false;
 20:
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            var _closure2_slot3 = entity;
            report = _closure1_slot5;
            tangon = report.isFullServerPreview;
            tangon = tangon.bind(report)(yankee);
            if(tangon) { _fun00002_ip = 416; continue _fun00001 }
 56:
            report = _closure1_slot9;
            if(michal) { _fun00002_ip = 76; continue _fun00001 }
 63:
            tangon = report.getOnboardingPrompts;
            oscard = tangon.bind(report)(yankee);
            _fun00002_ip = 87; continue _fun00001;
 76:
            tangon = report.getOnboardingPromptsForOnboarding;
            oscard = tangon.bind(report)(yankee);
 87:
            report = _closure1_slot9;
            tangon = report.getOnboardingResponses;
            tangon = tangon.bind(report)(yankee);
            _closure2_slot1 = tangon;
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.options;
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.includes;
                    entity = argFoo;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(oscard)(tangon);
            tangon = report.flat;
            romeon = tangon.bind(report)();
            verify = {};
            _closure2_slot2 = verify;
            option = {};
            _closure2_slot3 = option;
            report = oscard.forEach;
            tangon = function(argFoo) {
                entity = argFoo;
                tangon = _closure2_slot2;
                zuuluu = entity.id;
                michal = global;
                report = michal.Date;
                michal = report.now;
                michal = michal.bind(report)();
                tangon[zuuluu] = michal;
                zuuluu = entity.options;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure2_slot3;
                    entity = argFoo;
                    michal = entity.id;
                    entity = global;
                    tangon = entity.Date;
                    entity = tangon.now;
                    entity = entity.bind(tangon)();
                    zuuluu[michal] = entity;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 10;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.HTTP;
            if(michal) { _fun00002_ip = 303; continue _fun00001 }
 190:
            tangon = oscard.put;
            michal = {};
            offset = _closure1_slot12;
            report = offset.GUILD_ONBOARDING_RESPONSES;
            report = report.bind(offset)(yankee);
            michal['url'] = report;
            report = {};
            foxtra = romeon.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            offset = foxtra.bind(romeon)(offset);
            report['onboarding_responses'] = offset;
            report['onboarding_prompts_seen'] = verify;
            report['onboarding_responses_seen'] = option;
            michal['body'] = report;
            report = false;
            michal['rejectWithError'] = report;
            report = tangon.bind(oscard)(michal);
            tangon = report.then;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.body;
                    entity = null;
                    if(!(entity != michal)) { _fun00004_ip = 119; continue _fun00003 }
 14:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    report = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    entity['type'] = report;
                    report = _closure2_slot0;
                    entity['guildId'] = report;
                    report = tangon.body;
                    report = report.onboarding_responses;
                    entity['options'] = report;
                    report = tangon.body;
                    report = report.onboarding_prompts_seen;
                    entity['prompts_seen'] = report;
                    tangon = tangon.body;
                    tangon = tangon.onboarding_responses_seen;
                    entity['options_seen'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            report = tangon.bind(report)(michal);
            tangon = report.catch;
            michal = function(argFoo) {
                report = argFoo;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.captureException;
                michal = global;
                golfie = michal.Error;
                offset = _closure2_slot0;
                verify = report.statusCode;
                michal = michal.HermesInternal;
                option = michal.concat;
                oscard = 'Failed to update onboarding responses for guild ';
                michal = ': ';
                foxtra = option.bind(oscard)(offset, michal, verify);
                michal = {};
                michal['cause'] = report;
                report = golfie.prototype;
                report = Object.create(report, {constructor: {value: golfie}});
                backup = report;
                romeon = michal;
                michal = new backup[golfie](foxtra, romeon, yankee);
                michal = michal instanceof Object ? michal : report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = tangon.bind(report)(michal);
            _fun00002_ip = 414; continue _fun00001;
 303:
            report = oscard.post;
            tangon = {};
            offset = _closure1_slot12;
            golfie = offset.GUILD_ONBOARDING_RESPONSES;
            golfie = golfie.bind(offset)(yankee);
            tangon['url'] = golfie;
            golfie = {};
            yankee = romeon.map;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            offset = yankee.bind(romeon)(offset);
            golfie['onboarding_responses'] = offset;
            golfie['onboarding_prompts_seen'] = verify;
            golfie['onboarding_responses_seen'] = option;
            tangon['body'] = golfie;
            golfie = true;
            tangon['rejectWithError'] = golfie;
            oscard = report.bind(oscard)(tangon);
            report = oscard.then;
            tangon = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.body;
                    entity = null;
                    if(!(entity != michal)) { _fun00006_ip = 119; continue _fun00005 }
 14:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.dispatch;
                    entity = {};
                    report = 'GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS';
                    entity['type'] = report;
                    report = _closure2_slot0;
                    entity['guildId'] = report;
                    report = tangon.body;
                    report = report.onboarding_responses;
                    entity['options'] = report;
                    report = tangon.body;
                    report = report.onboarding_prompts_seen;
                    entity['prompts_seen'] = report;
                    tangon = tangon.body;
                    tangon = tangon.onboarding_responses_seen;
                    entity['options_seen'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            report = report.bind(oscard)(tangon);
            tangon = report.catch;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.captureException;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu);
 414:
            return michal;
 416:
            return entity;
        }
    };
    var _closure1_slot15 = offset;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.AnalyticEvents;
    var _closure1_slot10 = golfie;
    golfie = michal.AnalyticsPages;
    var _closure1_slot11 = golfie;
    michal = michal.Endpoints;
    var _closure1_slot12 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildMemberFlags;
    var _closure1_slot13 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ReadStateTypes;
    var _closure1_slot14 = michal;
    michal = {};
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: selectOption
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argBar;
            report = argBaz;
            zuuluu = _closure1_slot9;
            michal = zuuluu.getOnboardingPrompt;
            michal = michal.bind(zuuluu)(oscard);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00008_ip = 183; continue _fun00007 }
 33:
            zuuluu = michal.singleSelect;
            if(zuuluu) { _fun00008_ip = 48; continue _fun00007 }
 42:
            tangon = new Array(0);
            _fun00008_ip = 111; continue _fun00007;
 48:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 14;
            zuuluu = yankee[option];
            verify = undefined;
            golfie = offset.bind(verify)(zuuluu);
            zuuluu = golfie.without;
            option = yankee[option];
            offset = offset.bind(verify)(option);
            verify = offset.map;
            option = michal.options;
            michal = 'id';
            michal = verify.bind(offset)(option, michal);
            tangon = zuuluu.bind(golfie)(michal, report);
 111:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            golfie = 'GUILD_ONBOARDING_SELECT_OPTION';
            entity['type'] = golfie;
            golfie = argFoo;
            entity['guildId'] = golfie;
            entity['promptId'] = oscard;
            entity['optionId'] = report;
            report = argCor;
            entity['selected'] = report;
            entity['removedOptionIds'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 183:
            entity = undefined;
            return entity;
        }
    };
    michal['selectOption'] = golfie;
    golfie = 14;
    golfie = oscard[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.debounce;
    golfie = 1000;
    golfie = option.bind(verify)(offset, golfie);
    michal['updateOnboardingResponses'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: updateRolesLocal
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            yankee = argBar;
            option = argBaz;
            zuuluu = _closure1_slot7;
            entity = zuuluu.getSelfMember;
            tangon = entity.bind(zuuluu)(report);
            zuuluu = null;
            oscard = zuuluu == tangon;
            entity = undefined;
            offset = undefined;
            if(oscard) { _fun00010_ip = 46; continue _fun00009 }
 40:
            offset = tangon.roles;
 46:
            if(!(zuuluu == offset)) { _fun00010_ip = 54; continue _fun00009 }
 50:
            offset = new Array(0);
 54:
            tangon = _closure1_slot5;
            zuuluu = tangon.isViewingRoles;
            zuuluu = zuuluu.bind(tangon)(report);
            if(zuuluu) { _fun00010_ip = 210; continue _fun00009 }
 75:
            zuuluu = yankee.length;
            oscard = 0;
            zuuluu = zuuluu > oscard;
            if(zuuluu) { _fun00010_ip = 98; continue _fun00009 }
 89:
            tangon = option.length;
            zuuluu = tangon > oscard;
 98:
            if(!zuuluu) { _fun00010_ip = 291; continue _fun00009 }
 104:
            foxtra = _closure1_slot1;
            backup = _closure1_slot2;
            zuuluu = 11;
            zuuluu = backup[zuuluu];
            oscard = foxtra.bind(entity)(zuuluu);
            tangon = oscard.dispatch;
            zuuluu = {};
            golfie = 'GUILD_MEMBER_UPDATE_LOCAL';
            zuuluu['type'] = golfie;
            zuuluu['guildId'] = report;
            golfie = 14;
            verify = backup[golfie];
            romeon = foxtra.bind(entity)(verify);
            verify = romeon.difference;
            golfie = backup[golfie];
            foxtra = foxtra.bind(entity)(golfie);
            golfie = foxtra.union;
            golfie = golfie.bind(foxtra)(offset, yankee);
            golfie = verify.bind(romeon)(golfie, option);
            zuuluu['roles'] = golfie;
            zuuluu['addedRoleIds'] = yankee;
            zuuluu['removedRoleIds'] = option;
            zuuluu = tangon.bind(oscard)(zuuluu);
            _fun00010_ip = 291; continue _fun00009;
 210:
            tangon = _closure1_slot0;
            romeon = _closure1_slot2;
            zuuluu = 13;
            zuuluu = romeon[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.updateImpersonatedRoles;
            verify = _closure1_slot1;
            michal = 14;
            oscard = romeon[michal];
            golfie = verify.bind(entity)(oscard);
            oscard = golfie.difference;
            michal = romeon[michal];
            verify = verify.bind(entity)(michal);
            michal = verify.union;
            michal = michal.bind(verify)(offset, yankee);
            michal = oscard.bind(golfie)(michal, option);
            michal = zuuluu.bind(tangon)(report, michal);
 291:
            return entity;
        }
    };
    michal['updateRolesLocal'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: completeOnboarding
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            update = argBar;
            entity = update.length;
            oscard = 0;
            entity = entity > oscard;
            tangon = null;
            echoed = null;
            if(!entity) { _fun00012_ip = 42; continue _fun00011 }
 26:
            michal = update.length;
            entity = 1;
            entity = michal - entity;
            echoed = update[entity];
 42:
            michal = _closure1_slot9;
            entity = michal.getSelectedOptions;
            ctrled = entity.bind(michal)(report);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            offset = 15;
            option = michal[offset];
            entity = undefined;
            verify = zuuluu.bind(entity)(option);
            option = verify.getSelectedRoleIds;
            romeon = option.bind(verify)(ctrled);
            michal = michal[offset];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getSelectedChannelIds;
            michal = michal.bind(zuuluu)(ctrled);
            option = _closure1_slot9;
            zuuluu = option.getEnabled;
            zuuluu = zuuluu.bind(option)(report);
            if(zuuluu) { _fun00012_ip = 139; continue _fun00011 }
 133:
            verify = new Array(0);
            _fun00012_ip = 154; continue _fun00011;
 139:
            option = _closure1_slot9;
            zuuluu = option.getDefaultChannelIds;
            verify = zuuluu.bind(option)(report);
 154:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            offset = option[offset];
            yankee = zuuluu.bind(entity)(offset);
            offset = yankee.getChannelCoverageForOnboarding;
            backup = offset.bind(yankee)(report, update, verify);
            yankee = _closure1_slot4;
            offset = 2;
            offset = yankee.bind(entity)(backup, offset);
            result = offset[oscard];
            source = 1;
            sizing = offset[source];
            kiloes = new Array(0);
            target = kiloes;
            papara = michal;
            cntext = 0;
            cntext = arraySpread(target, papara, cntext);
            target = kiloes;
            papara = verify;
            michal = arraySpread(target, papara, cntext);
            verify = kiloes.map;
            michal = function(argFoo) {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset = verify.bind(kiloes)(michal);
            verify = offset.filter;
            michal = 16;
            michal = option[michal];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.isNotNullish;
            cntext = verify.bind(offset)(michal);
            michal = 17;
            michal = option[michal];
            verify = zuuluu.bind(entity)(michal);
            option = verify.getFlattenedChannels;
            zuuluu = global;
            michal = zuuluu.Set;
            yankee = michal.prototype;
            yankee = Object.create(yankee, {constructor: {value: michal}});
            status = yankee;
            target = kiloes;
            michal = new status[michal](target, papara);
            papara = michal instanceof Object ? michal : yankee;
            yankee = true;
            status = verify;
            target = report;
            record = true;
            michal = status[option](target, papara, cntext, record, config);
            output = michal.length;
            if(!(tangon != echoed)) { _fun00012_ip = 375; continue _fun00011 }
 351:
            verify = echoed.options;
            option = verify.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = option.bind(verify)(michal);
            _fun00012_ip = 379; continue _fun00011;
 375:
            backup = new Array(0);
 379:
            var _closure2_slot0 = backup;
            option = _closure1_slot1;
            config = _closure1_slot2;
            michal = 18;
            michal = config[michal];
            offset = option.bind(entity)(michal);
            verify = offset.track;
            michal = _closure1_slot10;
            option = michal.GUILD_ONBOARDING_STEP_COMPLETED;
            michal = {};
            sequen = _closure1_slot0;
            vacuum = 19;
            vacuum = config[vacuum];
            sequen = sequen.bind(entity)(vacuum);
            vacuum = sequen.collectGuildAnalyticsMetadata;
            papara = vacuum.bind(sequen)(report);
            target = michal;
            vacuum = copyDataProperties(target, papara);
            update = update.length;
            source = update - source;
            update = 'step';
            michal[update] = source;
            echoed = tangon == echoed;
            update = 0;
            if(echoed) { _fun00012_ip = 503; continue _fun00011 }
 481:
            source = ctrled.filter;
            echoed = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            echoed = source.bind(ctrled)(echoed);
            update = echoed.length;
 503:
            echoed = 'options_selected';
            michal[echoed] = update;
            backup = backup.length;
            echoed = backup > oscard;
            backup = 'skipped';
            michal[backup] = echoed;
            echoed = false;
            backup = 'back';
            michal[backup] = echoed;
            backup = 'in_onboarding';
            michal[backup] = yankee;
            backup = 'is_final_step';
            michal[backup] = yankee;
            echoed = romeon.size;
            backup = 'roles_granted';
            michal[backup] = echoed;
            backup = 'channels_granted';
            michal[backup] = output;
            output = result.map;
            backup = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            output = output.bind(result)(backup);
            backup = 'guild_onboarding_covered_channel_ids';
            michal[backup] = output;
            backup = sizing.map;
            foxtra = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            backup = backup.bind(sizing)(foxtra);
            foxtra = 'guild_onboarding_uncovered_channel_ids';
            michal[foxtra] = backup;
            michal = verify.bind(offset)(option, michal);
            option = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 20;
            michal = backup[michal];
            offset = option.bind(entity)(michal);
            verify = offset.ackGuildFeature;
            michal = _closure1_slot14;
            option = michal.GUILD_ONBOARDING_QUESTION;
            foxtra = _closure1_slot1;
            michal = 21;
            michal = backup[michal];
            backup = foxtra.bind(entity)(michal);
            foxtra = backup.fromTimestamp;
            sizing = zuuluu.Date;
            michal = sizing.now;
            michal = michal.bind(sizing)();
            michal = foxtra.bind(backup)(michal);
            michal = verify.bind(offset)(report, option, michal);
            michal = _closure1_slot15;
            michal = michal.bind(entity)(report, yankee);
            option = _closure1_slot5;
            michal = option.isFullServerPreview;
            michal = michal.bind(option)(report);
            if(!michal) { _fun00012_ip = 1014; continue _fun00011 }
 768:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            michal = 13;
            offset = option[michal];
            backup = verify.bind(entity)(offset);
            foxtra = backup.updateImpersonatedChannels;
            offset = new Array(0);
            offset = foxtra.bind(backup)(report, kiloes, offset);
            offset = option[michal];
            backup = verify.bind(entity)(offset);
            foxtra = backup.updateImpersonatedData;
            offset = {};
            offset['optInEnabled'] = yankee;
            offset = foxtra.bind(backup)(report, offset);
            option = option[michal];
            verify = verify.bind(entity)(option);
            option = verify.updateImpersonatedRoles;
            offset = zuuluu.Array;
            zuuluu = offset.from;
            zuuluu = zuuluu.bind(offset)(romeon);
            zuuluu = option.bind(verify)(report, zuuluu);
            option = _closure1_slot8;
            zuuluu = option.getCurrentUser;
            zuuluu = zuuluu.bind(option)();
            if(!(tangon != zuuluu)) { _fun00012_ip = 1014; continue _fun00011 }
 890:
            verify = _closure1_slot7;
            option = verify.getMember;
            zuuluu = zuuluu.id;
            option = option.bind(verify)(report, zuuluu);
            verify = tangon == option;
            zuuluu = undefined;
            if(verify) { _fun00012_ip = 925; continue _fun00011 }
 920:
            zuuluu = option.flags;
 925:
            tangon = tangon != zuuluu;
            offset = 0;
            if(!tangon) { _fun00012_ip = 937; continue _fun00011 }
 934:
            offset = zuuluu;
 937:
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            michal = romeon[michal];
            tangon = verify.bind(entity)(michal);
            zuuluu = tangon.updateImpersonatedData;
            michal = {};
            oscard = {};
            option = 22;
            option = romeon[option];
            verify = verify.bind(entity)(option);
            option = verify.setFlag;
            golfie = _closure1_slot13;
            golfie = golfie.COMPLETED_ONBOARDING;
            golfie = option.bind(verify)(offset, golfie, yankee);
            oscard['flags'] = golfie;
            michal['memberOptions'] = oscard;
            michal = zuuluu.bind(tangon)(report, michal);
 1014:
            return entity;
        }
    };
    michal['completeOnboarding'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: onboardExistingMember
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            michal = global;
            report = michal.Set;
            entity = report.prototype;
            tangon = Object.create(entity, {constructor: {value: report}});
            romeon = argBar;
            foxtra = tangon;
            entity = new foxtra[report](romeon, yankee);
            golfie = entity instanceof Object ? entity : tangon;
            var _closure2_slot0 = golfie;
            report = _closure1_slot9;
            tangon = report.getEnabled;
            tangon = tangon.bind(report)(oscard);
            if(tangon) { _fun00014_ip = 67; continue _fun00013 }
 61:
            report = new Array(0);
            _fun00014_ip = 82; continue _fun00013;
 67:
            option = _closure1_slot9;
            tangon = option.getDefaultChannelIds;
            report = tangon.bind(option)(oscard);
 82:
            tangon = report.forEach;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.add;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = golfie.size;
            zuuluu = 0;
            if(!(tangon > zuuluu)) { _fun00014_ip = 186; continue _fun00013 }
 110:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 23;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.bulkOptInChannels;
            zuuluu = michal.Array;
            michal = zuuluu.from;
            yankee = michal.bind(zuuluu)(golfie);
            michal = {};
            entity = _closure1_slot11;
            entity = entity.GUILD_ONBOARDING;
            michal['page'] = entity;
            offset = true;
            foxtra = report;
            romeon = oscard;
            verify = michal;
            entity = foxtra[tangon](romeon, yankee, offset, verify, option);
 186:
            entity = undefined;
            return entity;
        }
    };
    michal['onboardExistingMember'] = golfie;
    golfie = function(argFoo) { // Original name: finishOnboarding
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_ONBOARDING_COMPLETE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['finishOnboarding'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: setUserOnboardingStep
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 11;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_ONBOARDING_SET_STEP';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['step'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['setUserOnboardingStep'] = golfie;
    tangon = function(argFoo) { // Original name: resetOnboarding
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 188; continue _fun00015 }
 10:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getCurrentUser;
                    zuuluu = michal.bind(zuuluu)();
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00016_ip = 180; continue _fun00015 }
 35:
                    option = _closure1_slot7;
                    golfie = option.getMember;
                    report = _closure2_slot0;
                    zuuluu = zuuluu.id;
                    report = golfie.bind(option)(report, zuuluu);
                    golfie = tangon == report;
                    verify = undefined;
                    zuuluu = undefined;
                    if(golfie) { _fun00016_ip = 79; continue _fun00015 }
 74:
                    zuuluu = report.flags;
 79:
                    tangon = tangon != zuuluu;
                    offset = 0;
                    if(!tangon) { _fun00016_ip = 91; continue _fun00015 }
 88:
                    offset = zuuluu;
 91:
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    zuuluu = 24;
                    zuuluu = yankee[zuuluu];
                    report = option.bind(verify)(zuuluu);
                    tangon = report.updateGuildSelfMember;
                    zuuluu = _closure2_slot0;
                    michal = {};
                    golfie = 22;
                    golfie = yankee[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.setFlag;
                    oscard = _closure1_slot13;
                    golfie = oscard.COMPLETED_ONBOARDING;
                    oscard = false;
                    oscard = option.bind(verify)(offset, golfie, oscard);
                    michal['flags'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    SaveGenerator(address=174);
 172:
                    return michal;
 174:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 185; continue _fun00015 }
 180:
                    zuuluu = undefined;
                    return zuuluu;
 185:
                    return michal;
 188:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['resetOnboarding'] = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/GuildOnboardingActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();