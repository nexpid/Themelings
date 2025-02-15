// app/modules/directory_channels/GuildDirectoryUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: orderByTotalMemberCount
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.orderBy;
        zulu = new Array(1);
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.approximateMemberCount;
            return entity;
        };
        zulu[0] = entity;
        mike = argFoo;
        entity = ['desc'];
        entity = tango.bind(report)(mike, zulu, entity);
        return entity;
    };
    var _closure1_slot3 = report;
    tango = function(argFoo) { // Original name: orderByDateAdded
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.orderBy;
        zulu = new Array(1);
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.createdAt;
            return entity;
        };
        zulu[0] = entity;
        mike = argFoo;
        entity = ['desc'];
        entity = tango.bind(report)(mike, zulu, entity);
        return entity;
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.DirectoryEntryTypes;
    var _closure1_slot2 = oscar;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/directory_channels/GuildDirectoryUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: guildDirectoryEntryFromServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 1;
            tango = tango[mike];
            mike = undefined;
            report = report.bind(mike)(tango);
            tango = zulu.type;
            entity = _closure1_slot2;
            entity = entity.GUILD;
            tango = tango === entity;
            entity = 'Directory entries must be connected to a guild!';
            entity = report.bind(mike)(tango, entity);
            entity = {};
            tango = zulu.directory_channel_id;
            entity['channelId'] = tango;
            tango = zulu.entity_id;
            entity['guildId'] = tango;
            tango = zulu.type;
            entity['type'] = tango;
            tango = zulu.author_id;
            entity['authorId'] = tango;
            tango = zulu.created_at;
            entity['createdAt'] = tango;
            tango = zulu.description;
            entity['description'] = tango;
            tango = zulu.primary_category_id;
            entity['primaryCategoryId'] = tango;
            oscar = zulu.guild;
            tango = null;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 153; continue _fun00001 }
 148:
            report = oscar.name;
 153:
            entity['name'] = report;
            oscar = zulu.guild;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 176; continue _fun00001 }
 171:
            report = oscar.icon;
 176:
            entity['icon'] = report;
            oscar = zulu.guild;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 200; continue _fun00001 }
 194:
            report = oscar.splash;
 200:
            entity['splash'] = report;
            report = global;
            golf = report.Set;
            oscar = zulu.guild;
            options = tango == oscar;
            report = undefined;
            if(options) { _fun00002_ip = 233; continue _fun00001 }
 227:
            report = oscar.features;
 233:
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            yankee = oscar;
            offset = report;
            report = new yankee[golf](offset, verify);
            report = report instanceof Object ? report : oscar;
            entity['features'] = report;
            oscar = zulu.guild;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 281; continue _fun00001 }
 275:
            report = oscar.approximate_member_count;
 281:
            entity['approximateMemberCount'] = report;
            oscar = zulu.guild;
            golf = tango == oscar;
            report = undefined;
            if(golf) { _fun00002_ip = 306; continue _fun00001 }
 300:
            report = oscar.approximate_presence_count;
 306:
            entity['approximatePresenceCount'] = report;
            zulu = zulu.guild;
            tango = tango == zulu;
            mike = undefined;
            if(tango) { _fun00002_ip = 333; continue _fun00001 }
 325:
            mike = zulu.featurable_in_directory;
 333:
            entity['featurableInDirectory'] = mike;
            return entity;
        }
    };
    zulu['guildDirectoryEntryFromServer'] = oscar;
    oscar = 5;
    zulu['MAX_CATEGORY_SERVERS'] = oscar;
    zulu['orderByTotalMemberCount'] = report;
    zulu['orderByDateAdded'] = tango;
    tango = function(argFoo) { // Original name: rankByDateAdded
        tango = argFoo;
        zulu = _closure1_slot4;
        mike = tango.filter;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.featurableInDirectory;
            return entity;
        };
        mike = mike.bind(tango)(entity);
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.slice;
        mike = 0;
        entity = 5;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['rankByDateAdded'] = tango;
    mike = function(argFoo) { // Original name: rankGuildEntries
        zulu = _closure1_slot3;
        mike = undefined;
        entity = argFoo;
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['rankGuildEntries'] = mike;
    return entity;
})();