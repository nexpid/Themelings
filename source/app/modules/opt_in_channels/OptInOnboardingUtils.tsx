// app/modules/opt_in_channels/OptInOnboardingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    report = function(argFoo) { // Original name: hasNotSetUpChannelOptIn
        _fun90233: for(var _fun90233_ip = 0; ; ) switch(_fun90233_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 5;
            entity = tango[entity];
            golf = undefined;
            zulu = zulu.bind(golf)(entity);
            entity = zulu.isOptInEnabledForGuild;
            entity = entity.bind(zulu)(oscar);
            tango = _closure1_slot7;
            zulu = tango.getSelfMember;
            report = zulu.bind(tango)(oscar);
            tango = null;
            options = tango == report;
            zulu = undefined;
            if(options) { _fun90233_ip = 70; continue _fun90233 }
 65:
            zulu = report.flags;
 70:
            report = tango != zulu;
            tango = 0;
            options = 0;
            if(!report) { _fun90233_ip = 84; continue _fun90233 }
 81:
            options = zulu;
 84:
            report = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 6;
            zulu = verify[zulu];
            golf = report.bind(golf)(zulu);
            report = golf.hasFlag;
            zulu = _closure1_slot9;
            zulu = zulu.COMPLETED_ONBOARDING;
            zulu = report.bind(golf)(options, zulu);
            report = _closure1_slot8;
            mike = report.getOptedInChannels;
            mike = mike.bind(report)(oscar);
            mike = mike.size;
            mike = mike > tango;
            entity = !entity;
            if(!entity) { _fun90233_ip = 159; continue _fun90233 }
 156:
            entity = !zulu;
 159:
            if(!entity) { _fun90233_ip = 165; continue _fun90233 }
 162:
            entity = !mike;
 165:
            return entity;
        }
    };
    var _closure1_slot10 = report;
    tango = function(argFoo) { // Original name: optIntoAllChannelsForExistingMember
        _fun90234: for(var _fun90234_ip = 0; ; ) switch(_fun90234_ip) {
 0:
            report = argFoo;
            mike = arguments[1];
            entity = undefined;
            if(!(mike === entity)) { _fun90234_ip = 16; continue _fun90234 }
 14:
            mike = {};
 16:
            oscar = mike.include;
            if(!(oscar === entity)) { _fun90234_ip = 54; continue _fun90234 }
 26:
            tango = global;
            tango = tango.Set;
            golf = tango.prototype;
            golf = Object.create(golf, {constructor: {value: tango}});
            foxtrot = golf;
            tango = new foxtrot[tango](romeo);
            oscar = tango instanceof Object ? tango : golf;
 54:
            mike = mike.exclude;
            if(!(mike === entity)) { _fun90234_ip = 92; continue _fun90234 }
 64:
            tango = global;
            tango = tango.Set;
            golf = tango.prototype;
            golf = Object.create(golf, {constructor: {value: tango}});
            foxtrot = golf;
            tango = new foxtrot[tango](romeo);
            mike = tango instanceof Object ? tango : golf;
 92:
            var _closure2_slot0 = mike;
            var _closure2_slot1 = entity;
            golf = _closure1_slot6;
            tango = golf.getChannels;
            verify = tango.bind(golf)(report);
            tango = _closure1_slot4;
            yankee = verify[tango];
            options = new Array(0);
            offset = 0;
            romeo = options;
            offset = arraySpread(romeo, yankee, offset);
            tango = _closure1_slot5;
            yankee = verify[tango];
            romeo = options;
            tango = arraySpread(romeo, yankee, offset);
            golf = options.filter;
            tango = function(argFoo) {
                _fun90235: for(var _fun90235_ip = 0; ; ) switch(_fun90235_ip) {
 0:
                    entity = argFoo;
                    mike = entity.channel;
                    entity = mike.isThread;
                    entity = entity.bind(mike)();
                    entity = !entity;
                    if(!entity) { _fun90235_ip = 49; continue _fun90235 }
 24:
                    tango = _closure2_slot0;
                    zulu = tango.has;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    entity = !mike;
 49:
                    return entity;
                }
            };
            options = golf.bind(options)(tango);
            golf = options.map;
            tango = function(argFoo) {
                entity = argFoo;
                entity = entity.channel;
                entity = entity.id;
                return entity;
            };
            golf = golf.bind(options)(tango);
            _closure2_slot1 = golf;
            tango = oscar.forEach;
            zulu = function(argFoo) {
                zulu = _closure2_slot1;
                mike = zulu.push;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = tango.bind(oscar)(zulu);
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 8;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.onboardExistingMember;
            mike = global;
            mike = mike.Set;
            oscar = mike.prototype;
            oscar = Object.create(oscar, {constructor: {value: mike}});
            foxtrot = oscar;
            romeo = golf;
            mike = new foxtrot[mike](romeo, yankee);
            mike = mike instanceof Object ? mike : oscar;
            mike = zulu.bind(tango)(report, mike);
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    offset = options[oscar];
    offset = golf.bind(entity)(offset);
    yankee = offset.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot4 = yankee;
    offset = offset.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = offset;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildMemberFlags;
    var _closure1_slot9 = oscar;
    oscar = 10;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/opt_in_channels/OptInOnboardingUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['hasNotSetUpChannelOptIn'] = report;
    report = function(argFoo) { // Original name: toggleShowAllChannels
        _fun90238: for(var _fun90238_ip = 0; ; ) switch(_fun90238_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot10;
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            if(tango) { _fun90238_ip = 80; continue _fun90238 }
 20:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            tango = 5;
            tango = golf[tango];
            report = oscar.bind(entity)(tango);
            tango = report.isOptInEnabledForGuild;
            tango = tango.bind(report)(zulu);
            report = 7;
            report = golf[report];
            oscar = oscar.bind(entity)(report);
            report = oscar.setGuildOptIn;
            tango = !tango;
            tango = report.bind(oscar)(zulu, tango);
            _fun90238_ip = 89; continue _fun90238;
 80:
            mike = _closure1_slot11;
            mike = mike.bind(entity)(zulu);
 89:
            return entity;
        }
    };
    zulu['toggleShowAllChannels'] = report;
    zulu['optIntoAllChannelsForExistingMember'] = tango;
    mike = function(argFoo) { // Original name: hasClearedGuildOnboardingNotice
        _fun90239: for(var _fun90239_ip = 0; ; ) switch(_fun90239_ip) {
 0:
            verify = argFoo;
            oscar = arguments[1];
            golf = undefined;
            if(!(oscar === golf)) { _fun90239_ip = 19; continue _fun90239 }
 12:
            oscar = _closure1_slot3;
 19:
            zulu = null;
            entity = zulu != verify;
            if(!entity) { _fun90239_ip = 156; continue _fun90239 }
 31:
            report = _closure1_slot0;
            options = _closure1_slot2;
            tango = 6;
            tango = options[tango];
            report = report.bind(golf)(tango);
            tango = report.hasFlag;
            oscar = oscar.settings;
            options = oscar.guilds;
            offset = zulu == options;
            oscar = undefined;
            if(offset) { _fun90239_ip = 106; continue _fun90239 }
 81:
            options = options.guilds;
            options = options[verify];
            verify = zulu == options;
            oscar = undefined;
            if(verify) { _fun90239_ip = 106; continue _fun90239 }
 100:
            oscar = options.guildOnboardingProgress;
 106:
            options = zulu != oscar;
            zulu = 0;
            if(!options) { _fun90239_ip = 118; continue _fun90239 }
 115:
            zulu = oscar;
 118:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            mike = 9;
            mike = options[mike];
            mike = oscar.bind(golf)(mike);
            mike = mike.GuildOnboardingProgress;
            mike = mike.GUILD_NOTICE_CLEARED;
            entity = tango.bind(report)(zulu, mike);
 156:
            return entity;
        }
    };
    zulu['hasClearedGuildOnboardingNotice'] = mike;
    return entity;
})();