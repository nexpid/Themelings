// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: ChannelSubtitle
        _fun113395: for(var _fun113395_ip = 0; ; ) switch(_fun113395_ip) {
 0:
            entity = argFoo;
            yankee = entity.muted;
            zulu = entity.connected;
            foxtrot = entity.channelId;
            romeo = entity.guildId;
            offset = entity.layout;
            golf = entity.subtitle;
            oscar = entity.textProps;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            entity = 5;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            entity = tango.getChannelSubtitleData;
            backup = entity.bind(tango)(golf);
            entity = null;
            if(!(entity != backup)) { _fun113395_ip = 255; continue _fun113395 }
 88:
            golf = backup.type;
            tango = 'voice';
            verify = tango === golf;
            if(!verify) { _fun113395_ip = 107; continue _fun113395 }
 104:
            verify = zulu;
 107:
            tango = _closure1_slot3;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            mike = 4;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            zulu = mike.Text;
            mike = {};
            output = mike;
            sizing = oscar;
            oscar = copyDataProperties(output, sizing);
            oscar = 6;
            oscar = options[oscar];
            options = golf.bind(report)(oscar);
            golf = options.renderMessagePreviewMarkup;
            oscar = {};
            backup = backup.subtitle;
            oscar['content'] = backup;
            backup = entity != yankee;
            if(!backup) { _fun113395_ip = 188; continue _fun113395 }
 185:
            backup = yankee;
 188:
            oscar['muted'] = backup;
            oscar['channelId'] = foxtrot;
            oscar['guildId'] = romeo;
            oscar['layout'] = offset;
            offset = 'text-muted';
            if(!yankee) { _fun113395_ip = 221; continue _fun113395 }
 215:
            offset = 'interactive-muted';
 221:
            oscar['color'] = offset;
            verify = !verify;
            oscar['disableAnimatedEmoji'] = verify;
            golf = golf.bind(options)(oscar);
            oscar = 'children';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            return mike;
 255:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelSubtitle.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: renderChannelSubtitle
        _fun113396: for(var _fun113396_ip = 0; ; ) switch(_fun113396_ip) {
 0:
            entity = argFoo;
            options = entity.subtitle;
            offset = entity.muted;
            yankee = entity.layout;
            foxtrot = entity.channelId;
            romeo = entity.guildId;
            verify = entity.connected;
            entity = null;
            if(!(entity != options)) { _fun113396_ip = 283; continue _fun113396 }
 46:
            golf = {};
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 3;
            mike = report[mike];
            oscar = undefined;
            tango = tango.bind(oscar)(mike);
            mike = tango.getLayoutStyles;
            mike = mike.bind(tango)(yankee);
            mike = mike.messagePreview;
            mike = mike.text;
            mike = mike.variant;
            golf['variant'] = mike;
            mike = 'text-muted';
            if(!offset) { _fun113396_ip = 119; continue _fun113396 }
 113:
            mike = 'interactive-muted';
 119:
            golf['color'] = mike;
            tango = 1;
            golf['lineClamp'] = tango;
            mike = 1.75;
            golf['maxFontSizeMultiplier'] = mike;
            mike = {};
            if(offset) { _fun113396_ip = 155; continue _fun113396 }
 151:
            tango = _closure1_slot2;
 155:
            mike['opacity'] = tango;
            golf['style'] = mike;
            tango = 'string';
            mike = typeof options;
            if(!(tango !== mike)) { _fun113396_ip = 225; continue _fun113396 }
 174:
            report = _closure1_slot3;
            tango = _closure1_slot4;
            mike = {};
            mike['channelId'] = foxtrot;
            mike['guildId'] = romeo;
            mike['layout'] = yankee;
            mike['subtitle'] = options;
            mike['muted'] = offset;
            mike['connected'] = verify;
            mike['textProps'] = golf;
            mike = report.bind(oscar)(tango, mike);
            _fun113396_ip = 281; continue _fun113396;
 225:
            report = _closure1_slot3;
            tango = _closure1_slot0;
            verify = _closure1_slot1;
            zulu = 4;
            zulu = verify[zulu];
            zulu = tango.bind(oscar)(zulu);
            tango = zulu.Text;
            zulu = {};
            kilo = zulu;
            backup = golf;
            golf = copyDataProperties(kilo, backup);
            golf = 'children';
            zulu[golf] = options;
            mike = report.bind(oscar)(tango, zulu);
 281:
            return mike;
 283:
            return entity;
        }
    };
    zulu['renderChannelSubtitle'] = mike;
    return entity;
})();