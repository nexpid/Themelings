// app/experiments/ChannelSummariesExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: canSeeChannelSummaries
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = arguments[1];
            golf = arguments[2];
            oscar = undefined;
            if(!(report === oscar)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            report = false;
 17:
            if(!(golf === oscar)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            golf = true;
 23:
            verify = null;
            entity = verify != tango;
            if(!entity) { _fun00002_ip = 247; continue _fun00001 }
 35:
            options = verify == tango;
            zulu = false;
            mike = false;
            if(options) { _fun00002_ip = 163; continue _fun00001 }
 46:
            romeo = _closure1_slot2;
            yankee = romeo.getGuild;
            offset = verify == tango;
            foxtrot = undefined;
            if(offset) { _fun00002_ip = 72; continue _fun00001 }
 67:
            foxtrot = tango.guild_id;
 72:
            backup = verify != foxtrot;
            offset = '';
            if(!backup) { _fun00002_ip = 86; continue _fun00001 }
 83:
            offset = foxtrot;
 86:
            offset = yankee.bind(romeo)(offset);
            verify = verify != offset;
            if(!verify) { _fun00002_ip = 113; continue _fun00001 }
 98:
            yankee = offset.rulesChannelId;
            offset = tango.id;
            verify = yankee === offset;
 113:
            options = _closure1_slot5;
            yankee = options.SUMMARIZEABLE;
            offset = yankee.has;
            options = tango.type;
            options = offset.bind(yankee)(options);
            if(!options) { _fun00002_ip = 154; continue _fun00001 }
 141:
            offset = tango.isNSFW;
            offset = offset.bind(tango)();
            options = !offset;
 154:
            if(!options) { _fun00002_ip = 160; continue _fun00001 }
 157:
            options = !verify;
 160:
            mike = options;
 163:
            options = !mike;
            mike = !options;
            if(options) { _fun00002_ip = 244; continue _fun00001 }
 172:
            zulu = zulu !== report;
            if(zulu) { _fun00002_ip = 206; continue _fun00001 }
 179:
            options = tango.hasFlag;
            report = _closure1_slot8;
            report = report.SUMMARIES_DISABLED;
            report = options.bind(tango)(report);
            zulu = !report;
 206:
            if(!zulu) { _fun00002_ip = 241; continue _fun00001 }
 209:
            report = _closure1_slot10;
            verify = _closure1_slot2;
            options = verify.getGuild;
            tango = tango.guild_id;
            tango = options.bind(verify)(tango);
            zulu = report.bind(oscar)(tango, golf);
 241:
            mike = zulu;
 244:
            entity = mike;
 247:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo) { // Original name: canGuildUseConversationSummaries
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            tango = arguments[1];
            entity = undefined;
            if(!(tango === entity)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            tango = true;
 14:
            mike = null;
            entity = mike != golf;
            if(!entity) { _fun00004_ip = 135; continue _fun00003 }
 23:
            oscar = golf.id;
            zulu = mike != oscar;
            if(!zulu) { _fun00004_ip = 60; continue _fun00003 }
 35:
            mike = _closure1_slot3;
            mike = oscar === mike;
            if(mike) { _fun00004_ip = 57; continue _fun00003 }
 49:
            report = _closure1_slot4;
            mike = oscar === report;
 57:
            zulu = mike;
 60:
            mike = !zulu;
            if(zulu) { _fun00004_ip = 132; continue _fun00003 }
 66:
            oscar = golf.hasFeature;
            zulu = _closure1_slot6;
            zulu = zulu.SUMMARIES_ENABLED_GA;
            zulu = oscar.bind(golf)(zulu);
            oscar = !zulu;
            zulu = !oscar;
            if(oscar) { _fun00004_ip = 129; continue _fun00003 }
 99:
            tango = !tango;
            if(tango) { _fun00004_ip = 126; continue _fun00003 }
 105:
            oscar = golf.hasFeature;
            report = _closure1_slot6;
            report = report.SUMMARIES_ENABLED_BY_USER;
            tango = oscar.bind(golf)(report);
 126:
            zulu = tango;
 129:
            mike = zulu;
 132:
            entity = mike;
 135:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    verify = options[entity];
    oscar = argBaz;
    entity = undefined;
    oscar = oscar.bind(entity)(verify);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.ME;
    var _closure1_slot3 = verify;
    verify = oscar.FAVORITES;
    var _closure1_slot4 = verify;
    verify = oscar.ChannelTypesSets;
    var _closure1_slot5 = verify;
    verify = oscar.GuildFeatures;
    var _closure1_slot6 = verify;
    oscar = oscar.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ChannelFlags;
    var _closure1_slot8 = oscar;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'experiments/ChannelSummariesExperiment.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: channelEligibleForSummaries
        report = _closure1_slot9;
        tango = undefined;
        zulu = argFoo;
        mike = true;
        entity = false;
        entity = report.bind(tango)(zulu, mike, entity);
        return entity;
    };
    zulu['channelEligibleForSummaries'] = oscar;
    zulu['canSeeChannelSummaries'] = report;
    zulu['canGuildUseConversationSummaries'] = tango;
    tango = function(argFoo) { // Original name: useChannelSummariesExperiment
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = arguments[2];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00006_ip = 11; continue _fun00005 }
 9:
            tango = false;
 11:
            mike = _closure1_slot9;
            entity = argFoo;
            entity = mike.bind(zulu)(entity, tango);
            return entity;
        }
    };
    zulu['useChannelSummariesExperiment'] = tango;
    mike = function(argFoo) { // Original name: useGuildEligibleForSummaries
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStores;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = _closure1_slot10;
                report = _closure1_slot2;
                mike = report.getGuild;
                entity = _closure2_slot0;
                golf = null;
                verify = golf == entity;
                zulu = undefined;
                entity = undefined;
                if(verify) { _fun00008_ip = 45; continue _fun00007 }
 36:
                options = _closure2_slot0;
                entity = options.id;
 45:
                if(!(golf == entity)) { _fun00008_ip = 53; continue _fun00007 }
 49:
                entity = _closure1_slot7;
 53:
                mike = mike.bind(report)(entity);
                entity = false;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGuildEligibleForSummaries'] = mike;
    return entity;
})();