import { defineStyleConfig } from '@chakra-ui/react';
import { Button } from './components/button';
import { Link } from './components/link';
import { Input } from './components/input';

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
  },
});

const Styles = { Link, Heading, Button, Input };

export default Styles;
