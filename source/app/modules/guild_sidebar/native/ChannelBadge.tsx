// app/modules/guild_sidebar/native/ChannelBadge.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function() {
        entity = {};
        mike = {};
        zulu = 4;
        mike['paddingStart'] = zulu;
        entity['channelInfoContainer'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot6 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/native/ChannelBadge.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelBadge
        _fun115738: for(var _fun115738_ip = 0; ; ) switch(_fun115738_ip) {
 0:
            mike = argFoo;
            verify = mike.mentionCount;
            options = mike.isMentionLowImportance;
            entity = mike.isNewChannel;
            kilo = mike.postsWithUnreadsCount;
            mike = mike.muted;
            zulu = _closure1_slot6;
            report = undefined;
            golf = zulu.bind(report)();
            tango = _closure1_slot0;
            offset = _closure1_slot2;
            zulu = 5;
            zulu = offset[zulu];
            yankee = tango.bind(report)(zulu);
            offset = yankee.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                entity = _closure1_slot4;
                entity = entity.locale;
                return entity;
            };
            backup = offset.bind(yankee)(tango, zulu);
            zulu = null;
            if(!(zulu != verify)) { _fun115738_ip = 113; continue _fun115738 }
 104:
            tango = 0;
            if(!(!(verify > tango))) { _fun115738_ip = 324; continue _fun115738 }
 113:
            if(entity) { _fun115738_ip = 264; continue _fun115738 }
 119:
            tango = zulu != mike;
            entity = null;
            if(!tango) { _fun115738_ip = 262; continue _fun115738 }
 131:
            entity = null;
            if(mike) { _fun115738_ip = 262; continue _fun115738 }
 139:
            mike = zulu != kilo;
            entity = null;
            if(!mike) { _fun115738_ip = 262; continue _fun115738 }
 148:
            mike = 0;
            mike = kilo > mike;
            entity = null;
            if(!mike) { _fun115738_ip = 262; continue _fun115738 }
 159:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            offset = golf.channelInfoContainer;
            mike['style'] = offset;
            foxtrot = _closure1_slot0;
            sizing = _closure1_slot2;
            offset = 8;
            offset = sizing[offset];
            offset = foxtrot.bind(report)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-xs/semibold', 'color': 'text-muted'};
            romeo = 9;
            romeo = sizing[romeo];
            foxtrot = foxtrot.bind(report)(romeo);
            romeo = foxtrot.humanizeValue;
            romeo = romeo.bind(foxtrot)(kilo, backup);
            offset['children'] = romeo;
            offset = tango.bind(report)(yankee, offset);
            mike['children'] = offset;
            entity = tango.bind(report)(zulu, mike);
 262:
            _fun115738_ip = 322; continue _fun115738;
 264:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            offset = golf.channelInfoContainer;
            mike['style'] = offset;
            yankee = _closure1_slot1;
            romeo = _closure1_slot2;
            offset = 7;
            offset = romeo[offset];
            yankee = yankee.bind(report)(offset);
            offset = {};
            offset = tango.bind(report)(yankee, offset);
            mike['children'] = offset;
            entity = tango.bind(report)(zulu, mike);
 322:
            _fun115738_ip = 392; continue _fun115738;
 324:
            tango = _closure1_slot5;
            zulu = _closure1_slot3;
            mike = {};
            golf = golf.channelInfoContainer;
            mike['style'] = golf;
            golf = _closure1_slot1;
            offset = _closure1_slot2;
            oscar = 6;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            oscar['mentionsCount'] = verify;
            oscar['isMentionLowImportance'] = options;
            oscar = tango.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 392:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();