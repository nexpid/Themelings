// app/modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    mike = function(argFoo, argBar) { // Original name: getChannelIconData
        _fun71828: for(var _fun71828_ip = 0; ; ) switch(_fun71828_ip) {
 0:
            report = argFoo;
            zulu = report.type;
            entity = _closure1_slot6;
            entity = entity.GUILD_CATEGORY;
            if(!(zulu !== entity)) { _fun71828_ip = 64; continue _fun71828 }
 25:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.getChannelIconWithGuild;
            entity = argBar;
            entity = zulu.bind(tango)(report, entity);
            _fun71828_ip = 86; continue _fun71828;
 64:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 11;
            zulu = zulu[mike];
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 86:
            return entity;
        }
    };
    var _closure1_slot8 = mike;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ChannelTypes;
    var _closure1_slot6 = options;
    report = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot7 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: transformSearchableSelectOptions
        tango = argFoo;
        oscar = argBar;
        var _closure2_slot0 = oscar;
        report = _closure1_slot4;
        zulu = report.getGuild;
        zulu = zulu.bind(report)(oscar);
        var _closure2_slot1 = zulu;
        zulu = tango.map;
        mike = function(argFoo) {
            _fun71830: for(var _fun71830_ip = 0; ; ) switch(_fun71830_ip) {
 0:
                tango = argFoo;
                mike = tango.type;
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                golf = 4;
                entity = entity[golf];
                report = undefined;
                entity = oscar.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.USER;
                if(!(entity !== mike)) { _fun71830_ip = 723; continue _fun71830 }
 52:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.ROLE;
                if(!(entity !== mike)) { _fun71830_ip = 308; continue _fun71830 }
 88:
                oscar = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golf];
                entity = oscar.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.CHANNEL;
                if(!(entity !== mike)) { _fun71830_ip = 125; continue _fun71830 }
 121:
                entity = null;
                return entity;
 125:
                romeo = _closure2_slot1;
                oscar = _closure1_slot3;
                mike = oscar.getChannel;
                entity = tango.value;
                yankee = mike.bind(oscar)(entity);
                mike = null;
                entity = tango;
                if(!(mike != yankee)) { _fun71830_ip = 306; continue _fun71830 }
 163:
                mike = {};
                sizing = mike;
                kilo = tango;
                oscar = copyDataProperties(sizing, kilo);
                golf = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 6;
                oscar = offset[oscar];
                verify = golf.bind(report)(oscar);
                options = verify.ensureAvatarSource;
                oscar = _closure1_slot8;
                oscar = oscar.bind(report)(yankee, romeo);
                oscar = options.bind(verify)(oscar);
                options = oscar.uri;
                oscar = 'iconSrc';
                mike[oscar] = options;
                oscar = 9;
                oscar = offset[oscar];
                options = golf.bind(report)(oscar);
                golf = options.hex2int;
                verify = _closure1_slot1;
                oscar = 10;
                oscar = offset[oscar];
                oscar = verify.bind(report)(oscar);
                oscar = oscar.unsafe_rawColors;
                oscar = oscar.PRIMARY_330;
                golf = golf.bind(options)(oscar);
                oscar = 4278190080.0;
                golf = oscar | golf;
                oscar = 'iconColor';
                mike[oscar] = golf;
                entity = mike;
 306:
                return entity;
 308:
                options = _closure2_slot1;
                offset = null;
                entity = offset != options;
                golf = null;
                if(!entity) { _fun71830_ip = 352; continue _fun71830 }
 326:
                verify = _closure1_slot4;
                oscar = verify.getRole;
                mike = options.id;
                entity = tango.value;
                golf = oscar.bind(verify)(mike, entity);
 352:
                entity = tango;
                if(!(offset != golf)) { _fun71830_ip = 721; continue _fun71830 }
 362:
                entity = tango;
                if(!(offset != options)) { _fun71830_ip = 721; continue _fun71830 }
 372:
                oscar = _closure1_slot0;
                mike = _closure1_slot2;
                verify = 7;
                mike = mike[verify];
                oscar = oscar.bind(report)(mike);
                mike = oscar.canGuildUseRoleIcons;
                oscar = mike.bind(oscar)(options, golf);
                mike = null;
                if(!oscar) { _fun71830_ip = 437; continue _fun71830 }
 409:
                options = _closure1_slot0;
                oscar = _closure1_slot2;
                oscar = oscar[verify];
                options = options.bind(report)(oscar);
                oscar = options.getRoleIconData;
                mike = oscar.bind(options)(golf);
 437:
                if(!(offset != mike)) { _fun71830_ip = 467; continue _fun71830 }
 441:
                options = mike.customIconSrc;
                oscar = mike.unicodeEmoji;
                if(!(offset == oscar)) { _fun71830_ip = 647; continue _fun71830 }
 460:
                if(!(offset == options)) { _fun71830_ip = 621; continue _fun71830 }
 467:
                mike = {};
                sizing = mike;
                kilo = tango;
                verify = copyDataProperties(sizing, kilo);
                yankee = _closure1_slot0;
                backup = _closure1_slot2;
                verify = 6;
                verify = backup[verify];
                romeo = yankee.bind(report)(verify);
                yankee = romeo.ensureAvatarSource;
                foxtrot = _closure1_slot1;
                verify = 8;
                verify = backup[verify];
                verify = foxtrot.bind(report)(verify);
                verify = yankee.bind(romeo)(verify);
                yankee = verify.uri;
                verify = 'iconSrc';
                mike[verify] = yankee;
                verify = golf.colorString;
                if(!(offset == verify)) { _fun71830_ip = 556; continue _fun71830 }
 550:
                verify = _closure1_slot7;
                _fun71830_ip = 593; continue _fun71830;
 556:
                yankee = _closure1_slot0;
                romeo = _closure1_slot2;
                offset = 9;
                offset = romeo[offset];
                yankee = yankee.bind(report)(offset);
                offset = yankee.hex2int;
                golf = golf.colorString;
                verify = offset.bind(yankee)(golf);
 593:
                golf = 4278190080.0;
                verify = golf | verify;
                golf = 'iconColor';
                mike[golf] = verify;
                entity = mike;
                _fun71830_ip = 721; continue _fun71830;
 621:
                mike = {};
                sizing = mike;
                kilo = tango;
                golf = copyDataProperties(sizing, kilo);
                golf = 'iconSrc';
                mike[golf] = options;
                entity = mike;
                _fun71830_ip = 721; continue _fun71830;
 647:
                mike = {};
                sizing = mike;
                kilo = tango;
                golf = copyDataProperties(sizing, kilo);
                golf = {};
                options = oscar.id;
                golf['id'] = options;
                options = oscar.name;
                golf['name'] = options;
                options = oscar.animated;
                golf['animated'] = options;
                options = oscar.url;
                golf['src'] = options;
                oscar = oscar.surrogates;
                golf['surrogates'] = oscar;
                oscar = 'iconEmoji';
                mike[oscar] = golf;
                entity = mike;
 721:
                return entity;
 723:
                options = _closure2_slot0;
                oscar = _closure1_slot5;
                mike = oscar.getUser;
                entity = tango.value;
                golf = mike.bind(oscar)(entity);
                mike = null;
                entity = tango;
                if(!(mike != golf)) { _fun71830_ip = 833; continue _fun71830 }
 759:
                mike = {};
                sizing = mike;
                kilo = tango;
                tango = copyDataProperties(sizing, kilo);
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 6;
                zulu = oscar[zulu];
                report = tango.bind(report)(zulu);
                tango = report.ensureAvatarSource;
                oscar = golf.getAvatarSource;
                zulu = false;
                zulu = oscar.bind(golf)(options, zulu);
                zulu = tango.bind(report)(zulu);
                tango = zulu.uri;
                zulu = 'iconSrc';
                mike[zulu] = tango;
                entity = mike;
 833:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.filter;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        entity = 5;
        tango = tango[entity];
        entity = undefined;
        entity = report.bind(entity)(tango);
        entity = entity.isNotNullish;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['transformSearchableSelectOptions'] = tango;
    zulu['getChannelIconData'] = mike;
    return entity;
})();