// app/modules/directory_channels/GuildDirectoryUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: orderByTotalMemberCount
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.orderBy;
        zuuluu = new Array(1);
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.approximateMemberCount;
            return entity;
        };
        zuuluu[0] = entity;
        michal = argFoo;
        entity = ['desc'];
        entity = tangon.bind(report)(michal, zuuluu, entity);
        return entity;
    };
    var _closure1_slot3 = report;
    tangon = function(argFoo) { // Original name: orderByDateAdded
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.orderBy;
        zuuluu = new Array(1);
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.createdAt;
            return entity;
        };
        zuuluu[0] = entity;
        michal = argFoo;
        entity = ['desc'];
        entity = tangon.bind(report)(michal, zuuluu, entity);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.DirectoryEntryTypes;
    var _closure1_slot2 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/directory_channels/GuildDirectoryUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: guildDirectoryEntryFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = zuuluu.type;
            entity = _closure1_slot2;
            entity = entity.GUILD;
            tangon = tangon === entity;
            entity = 'Directory entries must be connected to a guild!';
            entity = report.bind(michal)(tangon, entity);
            entity = {};
            tangon = zuuluu.directory_channel_id;
            entity['channelId'] = tangon;
            tangon = zuuluu.entity_id;
            entity['guildId'] = tangon;
            tangon = zuuluu.type;
            entity['type'] = tangon;
            tangon = zuuluu.author_id;
            entity['authorId'] = tangon;
            tangon = zuuluu.created_at;
            entity['createdAt'] = tangon;
            tangon = zuuluu.description;
            entity['description'] = tangon;
            tangon = zuuluu.primary_category_id;
            entity['primaryCategoryId'] = tangon;
            oscard = zuuluu.guild;
            tangon = null;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 153; continue _fun00001 }
 148:
            report = oscard.name;
 153:
            entity['name'] = report;
            oscard = zuuluu.guild;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 176; continue _fun00001 }
 171:
            report = oscard.icon;
 176:
            entity['icon'] = report;
            oscard = zuuluu.guild;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 200; continue _fun00001 }
 194:
            report = oscard.splash;
 200:
            entity['splash'] = report;
            report = global;
            golfie = report.Set;
            oscard = zuuluu.guild;
            option = tangon == oscard;
            report = undefined;
            if(option) { _fun00002_ip = 233; continue _fun00001 }
 227:
            report = oscard.features;
 233:
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            yankee = oscard;
            offset = report;
            report = new yankee[golfie](offset, verify);
            report = report instanceof Object ? report : oscard;
            entity['features'] = report;
            oscard = zuuluu.guild;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 281; continue _fun00001 }
 275:
            report = oscard.approximate_member_count;
 281:
            entity['approximateMemberCount'] = report;
            oscard = zuuluu.guild;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 306; continue _fun00001 }
 300:
            report = oscard.approximate_presence_count;
 306:
            entity['approximatePresenceCount'] = report;
            zuuluu = zuuluu.guild;
            tangon = tangon == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 333; continue _fun00001 }
 325:
            michal = zuuluu.featurable_in_directory;
 333:
            entity['featurableInDirectory'] = michal;
            return entity;
        }
    };
    zuuluu['guildDirectoryEntryFromServer'] = oscard;
    oscard = 5;
    zuuluu['MAX_CATEGORY_SERVERS'] = oscard;
    zuuluu['orderByTotalMemberCount'] = report;
    zuuluu['orderByDateAdded'] = tangon;
    tangon = function(argFoo) { // Original name: rankByDateAdded
        tangon = argFoo;
        zuuluu = _closure1_slot4;
        michal = tangon.filter;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.featurableInDirectory;
            return entity;
        };
        michal = michal.bind(tangon)(entity);
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.slice;
        michal = 0;
        entity = 5;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['rankByDateAdded'] = tangon;
    michal = function(argFoo) { // Original name: rankGuildEntries
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['rankGuildEntries'] = michal;
    return entity;
})();