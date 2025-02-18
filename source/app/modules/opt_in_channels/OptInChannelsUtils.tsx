// app/modules/opt_in_channels/OptInChannelsUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: setIndex
        michal = argBar;
        entity = argFoo;
        entity['index'] = michal;
        entity = undefined;
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Routes;
    var _closure1_slot7 = golfie;
    tangon = tangon.ChannelTypes;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ChannelFlags;
    var _closure1_slot9 = golfie;
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelListGuildActionRow;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ReadStateTypes;
    var _closure1_slot12 = tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/opt_in_channels/OptInChannelsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: useFilterCategoriesByQuery
        option = argBar;
        golfie = argBaz;
        zuuluu = argCor;
        var _closure2_slot0 = option;
        var _closure2_slot1 = golfie;
        michal = zuuluu.toLowerCase;
        report = michal.bind(zuuluu)();
        var _closure2_slot2 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        michal = 8;
        tangon = tangon[michal];
        michal = undefined;
        oscard = oscard.bind(michal)(tangon);
        tangon = oscard.useCanSeeOnboardingHome;
        michal = argFoo;
        michal = tangon.bind(oscard)(michal);
        var _closure2_slot3 = michal;
        tangon = _closure1_slot3;
        oscard = tangon.useCallback;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = function(argFoo, argBar) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = argFoo;
                golfie = argBar;
                entity = _closure2_slot3;
                entity = !entity;
                if(entity) { _fun00002_ip = 51; continue _fun00001 }
 19:
                tangon = report.channel;
                zuuluu = tangon.hasFlag;
                michal = _closure1_slot9;
                michal = michal.IS_GUILD_RESOURCE_CHANNEL;
                michal = zuuluu.bind(tangon)(michal);
                entity = !michal;
 51:
                if(!entity) { _fun00002_ip = 192; continue _fun00001 }
 57:
                michal = report.channel;
                zuuluu = michal.type;
                michal = _closure1_slot8;
                michal = michal.GUILD_DIRECTORY;
                michal = zuuluu !== michal;
                if(!michal) { _fun00002_ip = 189; continue _fun00001 }
 87:
                oscard = golfie.length;
                zuuluu = 0;
                zuuluu = zuuluu === oscard;
                if(zuuluu) { _fun00002_ip = 186; continue _fun00001 }
 101:
                oscard = _closure1_slot1;
                option = _closure1_slot2;
                tangon = 9;
                tangon = option[tangon];
                option = undefined;
                oscard = oscard.bind(option)(tangon);
                tangon = report.channel;
                verify = tangon.name;
                tangon = verify.toLowerCase;
                tangon = tangon.bind(verify)();
                tangon = oscard.bind(option)(golfie, tangon);
                if(tangon) { _fun00002_ip = 183; continue _fun00001 }
 152:
                report = report.channel;
                oscard = report.topic;
                report = oscard.toLowerCase;
                oscard = report.bind(oscard)();
                report = oscard.includes;
                tangon = report.bind(oscard)(golfie);
 183:
                zuuluu = tangon;
 186:
                michal = zuuluu;
 189:
                entity = michal;
 192:
                return entity;
            }
        };
        oscard = oscard.bind(tangon)(michal, zuuluu);
        var _closure2_slot4 = oscard;
        zuuluu = tangon.useMemo;
        michal = new Array(4);
        michal[0] = option;
        michal[1] = golfie;
        michal[2] = oscard;
        michal[3] = report;
        entity = function() {
            entity = {};
            michal = new Array(0);
            entity['null'] = michal;
            michal = new Array(0);
            entity['_categories'] = michal;
            var _closure3_slot0 = entity;
            oscard = _closure2_slot1;
            report = _closure1_slot8;
            report = report.GUILD_CATEGORY;
            golfie = oscard[report];
            oscard = golfie.forEach;
            report = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.channel;
                    zuuluu = tangon.id;
                    michal = 'null';
                    if(!(michal === zuuluu)) { _fun00004_ip = 66; continue _fun00003 }
 23:
                    zuuluu = _closure3_slot0;
                    michal = _closure2_slot0;
                    oscard = michal.null;
                    report = oscard.filter;
                    michal = function(argFoo) {
                        tangon = _closure2_slot4;
                        zuuluu = _closure2_slot2;
                        michal = undefined;
                        entity = argFoo;
                        entity = tangon.bind(michal)(entity, zuuluu);
                        return entity;
                    };
                    michal = report.bind(oscard)(michal);
                    zuuluu['null'] = michal;
 66:
                    zuuluu = _closure3_slot0;
                    michal = tangon.id;
                    report = _closure2_slot0;
                    tangon = tangon.id;
                    report = report[tangon];
                    tangon = report.filter;
                    entity = function(argFoo) {
                        tangon = _closure2_slot4;
                        zuuluu = _closure2_slot2;
                        michal = undefined;
                        entity = argFoo;
                        entity = tangon.bind(michal)(entity, zuuluu);
                        return entity;
                    };
                    entity = tangon.bind(report)(entity);
                    zuuluu[michal] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            report = oscard.bind(golfie)(report);
            tangon = _closure2_slot0;
            report = tangon._categories;
            tangon = report.filter;
            zuuluu = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = argFoo;
                    entity = michal.channel;
                    zuuluu = entity.id;
                    entity = 'null';
                    entity = entity === zuuluu;
                    if(entity) { _fun00006_ip = 42; continue _fun00005 }
 24:
                    zuuluu = _closure2_slot2;
                    tangon = zuuluu.length;
                    zuuluu = 0;
                    entity = zuuluu === tangon;
 42:
                    if(entity) { _fun00006_ip = 77; continue _fun00005 }
 45:
                    zuuluu = _closure3_slot0;
                    michal = michal.channel;
                    michal = michal.id;
                    michal = zuuluu[michal];
                    zuuluu = michal.length;
                    michal = 0;
                    entity = zuuluu > michal;
 77:
                    return entity;
                }
            };
            zuuluu = tangon.bind(report)(zuuluu);
            entity['_categories'] = zuuluu;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 10;
            zuuluu = report[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = entity._categories;
            tangon = tangon.bind(report)(zuuluu, entity);
            zuuluu = tangon.forEach;
            michal = _closure1_slot13;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useFilterCategoriesByQuery'] = tangon;
    tangon = function(argFoo) { // Original name: getFirstRouteFor
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            yankee = argFoo;
            michal = yankee.getSections;
            entity = false;
            offset = michal.bind(yankee)(entity);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = 11;
            michal = michal[tangon];
            verify = undefined;
            michal = zuuluu.bind(verify)(michal);
            michal = michal.SECTION_INDEX_GUILD_ACTIONS;
            michal = offset[michal];
            option = 0;
            if(!(michal > option)) { _fun00008_ip = 126; continue _fun00007 }
 57:
            michal = yankee.getGuildActionSection;
            zuuluu = michal.bind(yankee)();
            michal = zuuluu.getRow;
            zuuluu = michal.bind(zuuluu)(option);
            michal = _closure1_slot11;
            michal = michal.GUILD_HOME;
            if(!(michal !== zuuluu)) { _fun00008_ip = 258; continue _fun00007 }
 95:
            michal = _closure1_slot11;
            michal = michal.GUILD_ROLE_SUBSCRIPTIONS;
            if(!(michal !== zuuluu)) { _fun00008_ip = 246; continue _fun00007 }
 112:
            michal = _closure1_slot11;
            michal = michal.GUILD_MEMBER_APPLICATIONS;
            if(!(michal !== zuuluu)) { _fun00008_ip = 234; continue _fun00007 }
 126:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            michal = zuuluu.bind(verify)(michal);
            golfie = michal.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            michal = yankee.voiceChannelsSectionNumber;
            michal = golfie < michal;
            zuuluu = null;
            oscard = undefined;
            report = undefined;
            if(!michal) { _fun00008_ip = 225; continue _fun00007 }
 168:
            michal = offset[golfie];
            if(!(michal > option)) { _fun00008_ip = 212; continue _fun00007 }
 176:
            michal = yankee.getChannelFromSectionRow;
            tangon = michal.bind(yankee)(golfie, option);
            romeon = zuuluu == tangon;
            michal = undefined;
            if(romeon) { _fun00008_ip = 202; continue _fun00007 }
 197:
            michal = tangon.channel;
 202:
            oscard = tangon;
            report = michal;
            if(!(zuuluu == report)) { _fun00008_ip = 227; continue _fun00007 }
 212:
            golfie = golfie + 1;
            tangon = yankee.voiceChannelsSectionNumber;
            if(golfie < tangon) { _fun00008_ip = 168; continue _fun00007 }
 225:
            return zuuluu;
 227:
            michal = michal.id;
            return michal;
 234:
            michal = _closure1_slot10;
            michal = michal.MEMBER_APPLICATIONS;
            return michal;
 246:
            michal = _closure1_slot10;
            michal = michal.ROLE_SUBSCRIPTIONS;
            return michal;
 258:
            entity = _closure1_slot10;
            entity = entity.GUILD_HOME;
            return entity;
        }
    };
    zuuluu['getFirstRouteFor'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: clearRecentChannels
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            verify = argBar;
            oscard = arguments[2];
            entity = undefined;
            if(!(oscard === entity)) { _fun00010_ip = 17; continue _fun00009 }
 15:
            oscard = null;
 17:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 12;
            zuuluu = report[zuuluu];
            option = tangon.bind(entity)(zuuluu);
            zuuluu = option.bulkClearRecents;
            zuuluu = zuuluu.bind(option)(golfie, verify);
            zuuluu = 13;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.bulkAck;
            option = verify.map;
            zuuluu = function(argFoo) {
                tangon = argFoo;
                entity = {};
                entity['channelId'] = tangon;
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.CHANNEL;
                entity['readStateType'] = zuuluu;
                zuuluu = _closure1_slot6;
                michal = zuuluu.lastMessageId;
                michal = michal.bind(zuuluu)(tangon);
                entity['messageId'] = michal;
                return entity;
            };
            zuuluu = option.bind(verify)(zuuluu);
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00010_ip = 147; continue _fun00009 }
 100:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 14;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.transitionTo;
            report = _closure1_slot7;
            michal = report.CHANNEL;
            michal = michal.bind(report)(golfie, oscard);
            michal = zuuluu.bind(tangon)(michal);
 147:
            return entity;
        }
    };
    zuuluu['clearRecentChannels'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: useChannelBrowserSections
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            tangon = argCor;
            var _closure2_slot0 = report;
            var _closure2_slot1 = zuuluu;
            michal = argBaz;
            var _closure2_slot2 = michal;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 15;
            michal = offset[michal];
            option = undefined;
            yankee = verify.bind(option)(michal);
            golfie = yankee.useIsDismissibleContentDismissed;
            michal = 16;
            michal = offset[michal];
            michal = verify.bind(option)(michal);
            michal = michal.DismissibleContent;
            michal = michal.CHANNEL_BROWSER_NUX;
            michal = golfie.bind(yankee)(michal);
            golfie = 17;
            golfie = offset[golfie];
            verify = verify.bind(option)(golfie);
            option = verify.useStateFromStoresObject;
            oscard = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = new Array(1);
            oscard[0] = report;
            report = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getMutableGuildChannelsForGuild;
                    michal = _closure2_slot0;
                    yankee = zuuluu.bind(tangon)(michal);
                    verify = yankee;
                    tangon = 1;
                    zuuluu = null;
                    report = undefined;
                    for(oscard in verify)
 45:
                    {
 54:
                        romeon = oscard;
                        romeon = yankee[romeon];
                        foxtra = romeon.parent_id;
                        if(zuuluu == foxtra) { _fun00014_ip = 45; continue _fun00013 }
 71:
                        report = entity[foxtra];
                        backup = zuuluu != report;
                        romeon = 0;
                        if(!backup) { _fun00014_ip = 87; continue _fun00013 }
 84:
                        romeon = report;
 87:
                        romeon = romeon + tangon;
                        entity[foxtra] = romeon;
                        _fun00014_ip = 45; continue _fun00013;
                    }
 97:
                    return entity;
                }
            };
            report = option.bind(verify)(golfie, report, oscard);
            var _closure2_slot3 = report;
            report = zuuluu._categories;
            zuuluu = report.map;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot1;
                    entity = tangon.channel;
                    entity = entity.id;
                    michal = michal[entity];
                    entity = {};
                    report = tangon.channel;
                    oscard = report.id;
                    report = 'null';
                    if(!(report !== oscard)) { _fun00016_ip = 71; continue _fun00015 }
 44:
                    report = _closure2_slot3;
                    tangon = tangon.channel;
                    tangon = tangon.id;
                    oscard = report[tangon];
                    tangon = 1;
                    report = 0;
                    if(!(report !== oscard)) { _fun00016_ip = 76; continue _fun00015 }
 71:
                    tangon = michal.length;
 76:
                    entity['rowCount'] = tangon;
                    tangon = michal.length;
                    michal = 0;
                    if(!(michal !== tangon)) { _fun00016_ip = 96; continue _fun00015 }
 92:
                    michal = _closure2_slot2;
 96:
                    entity['rowHeight'] = michal;
                    return entity;
                }
            };
            entity = zuuluu.bind(report)(entity);
            if(michal) { _fun00012_ip = 174; continue _fun00011 }
 168:
            zuuluu = null;
            michal = zuuluu == tangon;
 174:
            if(michal) { _fun00012_ip = 203; continue _fun00011 }
 177:
            zuuluu = entity.unshift;
            michal = {};
            report = 1;
            michal['rowCount'] = report;
            michal['rowHeight'] = tangon;
            michal = zuuluu.bind(entity)(michal);
 203:
            return entity;
        }
    };
    zuuluu['useChannelBrowserSections'] = tangon;
    tangon = function(argFoo) { // Original name: useChannelBrowserChannelCount
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 17;
            zuuluu = report[zuuluu];
            golfie = undefined;
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = tangon.useStateFromStores;
            report = _closure1_slot5;
            michal = new Array(1);
            michal[0] = report;
            entity = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.getCategories;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = zuuluu.bind(tangon)(michal, entity);
            entity = report._categories;
            tangon = entity.length;
            michal = report._categories;
            entity = report._categories;
            entity = entity.length;
            oscard = 1;
            entity = entity - oscard;
            zuuluu = michal[entity];
            entity = null;
            if(!(entity != zuuluu)) { _fun00018_ip = 218; continue _fun00017 }
 109:
            michal = zuuluu.channel;
            option = entity == michal;
            golfie = undefined;
            if(option) { _fun00018_ip = 128; continue _fun00017 }
 123:
            golfie = michal.id;
 128:
            option = entity != golfie;
            michal = 'null';
            if(!option) { _fun00018_ip = 142; continue _fun00017 }
 139:
            michal = golfie;
 142:
            report = report[michal];
            michal = entity == report;
            golfie = 0;
            entity = 0;
            if(michal) { _fun00018_ip = 216; continue _fun00017 }
 157:
            michal = report.length;
            if(!(golfie !== michal)) { _fun00018_ip = 197; continue _fun00017 }
 166:
            michal = report.length;
            michal = michal - oscard;
            michal = report[michal];
            report = michal.index;
            michal = 2;
            michal = report + michal;
            michal = michal - tangon;
            _fun00018_ip = 213; continue _fun00017;
 197:
            report = zuuluu.index;
            zuuluu = 2;
            zuuluu = report + zuuluu;
            michal = zuuluu - tangon;
 213:
            entity = michal;
 216:
            return entity;
 218:
            entity = 0;
            return entity;
        }
    };
    zuuluu['useChannelBrowserChannelCount'] = tangon;
    michal = function(argFoo) { // Original name: getActiveAgoTimestamp
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            michal = _closure1_slot0;
            yankee = _closure1_slot2;
            entity = 18;
            zuuluu = yankee[entity];
            golfie = undefined;
            zuuluu = michal.bind(golfie)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.formatToPlainString;
            entity = yankee[entity];
            entity = michal.bind(golfie)(entity);
            entity = entity.t;
            michal = entity.8N0BHR;
            entity = {};
            verify = _closure1_slot1;
            oscard = 19;
            oscard = yankee[oscard];
            oscard = verify.bind(golfie)(oscard);
            option = 20;
            option = yankee[option];
            verify = verify.bind(golfie)(option);
            option = verify.extractTimestamp;
            yankee = _closure1_slot6;
            offset = yankee.lastMessageId;
            offset = offset.bind(yankee)(report);
            yankee = null;
            if(!(yankee != offset)) { _fun00020_ip = 120; continue _fun00019 }
 117:
            report = offset;
 120:
            report = option.bind(verify)(report);
            oscard = oscard.bind(golfie)(report);
            report = oscard.fromNow;
            report = report.bind(oscard)();
            entity['timeAgo'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['getActiveAgoTimestamp'] = michal;
    return entity;
})();