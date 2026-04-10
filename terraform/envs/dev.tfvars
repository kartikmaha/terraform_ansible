# ========================================
# DEV Environment
# ========================================

environment  = "dev"
project_name = "terraform-ansible"

aws_region = "ap-south-1"

instance_type = "t3.micro"
key_name      = "terra-key"

vpc_cidr = "10.0.0.0/16"

public_subnet_cidrs = [
  "10.0.1.0/24",
  "10.0.2.0/24"
]

app_port = 80
